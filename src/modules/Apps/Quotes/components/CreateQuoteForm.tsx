"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";
import ModalForm from "@/shared/components/ModalForm";
import useQuoteForm from "../hooks/useQuoteForm";
import { TEXTS, FIELDS, ModalMode } from "../content/quote.content";
import { useFetchEventTypes } from "@/modules/Apps/Events-Type/hooks/useEventTypeList";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated?: (data: any) => void;
  mode?: ModalMode;
  initialData?: {
    id?: string;
    clienteId?: string;
    tipoEventoId?: string;
    nombreEvento?: string;
    fechaEvento?: string;
    horaEvento?: string;
    numeroInvitados?: number;
    ubicacion?: string;
    estadoActualId?: string;
    observaciones?: string;
    status?: boolean;
  };
}

const CreateQuoteForm: React.FC<Props> = ({
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
    onSubmit,
    control,
  } = useQuoteForm({
    mode,
    initialData,
    open,
    onClose,
    onCreated,
  });

  const { data: eventTypes, loading: eventTypesLoading } = useFetchEventTypes();

  const body = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Primera fila */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.clienteId}
          </Typography>
          <TextField
            {...register("clienteId")}
            disabled={isView}
            fullWidth
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.clienteId}
            helperText={formState.errors.clienteId?.message}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.tipoEventoId}
          </Typography>
          <Controller
            name='tipoEventoId'
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!formState.errors.tipoEventoId}>
                <Select
                  {...field}
                  disabled={isView || eventTypesLoading}
                  displayEmpty
                  sx={{ borderRadius: 1 }}>
                  <MenuItem value='' disabled>
                    Seleccionar tipo de evento
                  </MenuItem>
                  {eventTypes.map((eventType) => (
                    <MenuItem key={eventType.id} value={eventType.id}>
                      {eventType.nombre}
                    </MenuItem>
                  ))}
                </Select>
                {formState.errors.tipoEventoId && (
                  <FormHelperText>
                    {formState.errors.tipoEventoId.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>
      </Box>

      {/* Segunda fila */}
      <Box>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.nombreEvento}
        </Typography>
        <TextField
          {...register("nombreEvento")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.nombreEvento}
          helperText={formState.errors.nombreEvento?.message}
        />
      </Box>

      {/* Tercera fila */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.fechaEvento}
          </Typography>
          <TextField
            {...register("fechaEvento")}
            type='date'
            disabled={isView}
            fullWidth
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.fechaEvento}
            helperText={formState.errors.fechaEvento?.message}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.horaEvento}
          </Typography>
          <TextField
            {...register("horaEvento")}
            type='time'
            disabled={isView}
            fullWidth
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.horaEvento}
            helperText={formState.errors.horaEvento?.message}
          />
        </Box>
      </Box>

      {/* Cuarta fila */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.numeroInvitados}
          </Typography>
          <TextField
            {...register("numeroInvitados", { valueAsNumber: true })}
            type='number'
            disabled={isView}
            fullWidth
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.numeroInvitados}
            helperText={formState.errors.numeroInvitados?.message}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.estadoActualId}
          </Typography>
          <TextField
            {...register("estadoActualId")}
            disabled={isView}
            fullWidth
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.estadoActualId}
            helperText={formState.errors.estadoActualId?.message}
          />
        </Box>
      </Box>

      {/* Quinta fila */}
      <Box>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.ubicacion}
        </Typography>
        <TextField
          {...register("ubicacion")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.ubicacion}
          helperText={formState.errors.ubicacion?.message}
        />
      </Box>

      {/* Sexta fila */}
      <Box>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.observaciones}
        </Typography>
        <TextField
          {...register("observaciones")}
          disabled={isView}
          fullWidth
          multiline
          rows={4}
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.observaciones}
          helperText={formState.errors.observaciones?.message}
        />
      </Box>

      {/* Estado */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <FormControlLabel
          control={<Checkbox {...register("status")} disabled={isView} />}
          label={FIELDS.status}
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
          updateMutation.status === "pending" ||
          detailLoading
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

export default CreateQuoteForm;
