"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ModalForm from "@/shared/components/ModalForm";
import useCategoryForm from "../hooks/useCategoryForm";
import {
  TEXTS,
  FIELDS,
  ModalMode,
  QUERY_KEYS,
} from "../content/category.content";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated?: (data: any) => void;
  mode?: ModalMode;
  initialData?: {
    id?: string | number;
    nombre?: string;
    descripcion?: string;
    userId?: string;
  };
}

const CreateCategoryService: React.FC<Props> = ({
  open,
  onClose,
  onCreated,
  mode = ModalMode.CREATE,
  initialData,
}) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState,
    isView,
    detailLoading,
    createMutation,
    updateMutation,
    onSubmit,
  } = useCategoryForm({ mode, initialData, open, onClose, onCreated });

  useEffect(() => {
    if (open) {
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.CATEGORY(initialData?.id),
      });
    }
  }, [open, queryClient]);

  const body = (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.name}
        </Typography>
        <TextField
          {...register("nombre")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.nombre}
          helperText={formState.errors.nombre?.message}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.description}
        </Typography>
        <TextField
          {...register("descripcion")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.descripcion}
          helperText={formState.errors.descripcion?.message}
        />
      </Box>
    </>
  );

  const actions = isView ? null : (
    <>
      <Button
        onClick={onClose}
        variant='contained'
        color='error'
        sx={{
          textTransform: "capitalize",
          borderRadius: "8px",
          fontWeight: 500,
          fontSize: "13px",
          padding: "11px 30px",
          color: "#fff !important",
        }}>
        {TEXTS.buttons.cancel}
      </Button>

      <Button
        type='submit'
        variant='contained'
        sx={{
          textTransform: "capitalize",
          borderRadius: "8px",
          fontWeight: 500,
          fontSize: "13px",
          padding: "11px 30px",
          color: "#fff !important",
        }}
        disabled={
          createMutation.status === "pending" ||
          updateMutation.status === "pending" ||
          detailLoading
        }>
        {mode === "edit" ? TEXTS.buttons.save : TEXTS.buttons.create}
      </Button>
    </>
  );

  return (
    <ModalForm
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      children={body}
      actions={actions}
      texts={{ title: TEXTS.modalTitles[mode] }}
    />
  );
};

export default CreateCategoryService;
