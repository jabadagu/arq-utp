"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import ModalForm from "@/shared/components/ModalForm";
import useCategoryForm from "../hooks/useCategoryForm";
import { TEXTS, FIELDS, ModalMode } from "../content/category.content";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated?: (data: any) => void;
  mode?: ModalMode;
  initialData?: {
    id?: string | number;
    name?: string;
    description?: string;
    userId?: number;
  };
}

const CreateCategoryService: React.FC<Props> = ({
  open,
  onClose,
  onCreated,
  mode = ModalMode.CREATE,
  initialData,
}) => {
  const {
    register,
    handleSubmit,
    formState,
    isView,
    detailLoading,
    createMutation,
    updateMutation,
    deleteMutation,
    onSubmit,
  } = useCategoryForm({ mode, initialData, open, onClose, onCreated });

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
          {...register("name")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.name}
          helperText={formState.errors.name?.message}
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
          {...register("description")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.description}
          helperText={formState.errors.description?.message}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.user}
        </Typography>
        <TextField
          {...register("userId", { valueAsNumber: true })}
          type='number'
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.userId}
          helperText={formState.errors.userId?.message}
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
