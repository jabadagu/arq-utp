"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import ModalForm from "@/shared/components/ModalForm";
import useEventTypeForm from "../hooks/useEventTypeForm";
import { TEXTS, FIELDS, ModalMode } from "../content/eventType.content";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated?: (data: any) => void;
  mode?: ModalMode;
  initialData?: {
    id?: string;
    nombre?: string;
    descripcion?: string;
    userId?: string;
  };
}

const CreateEventTypeForm: React.FC<Props> = ({
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
    createMutation,
    updateMutation,
    onSubmit,
  } = useEventTypeForm({
    mode,
    initialData,
    open,
    onClose,
    onCreated,
  });

  const body = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.nombre}
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

      <Box>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.descripcion}
        </Typography>
        <TextField
          {...register("descripcion")}
          disabled={isView}
          fullWidth
          multiline
          rows={4}
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.descripcion}
          helperText={formState.errors.descripcion?.message}
        />
      </Box>
    </Box>
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
          updateMutation.status === "pending"
        }>
        {mode === ModalMode.EDIT ? TEXTS.buttons.save : TEXTS.buttons.create}
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

export default CreateEventTypeForm;
