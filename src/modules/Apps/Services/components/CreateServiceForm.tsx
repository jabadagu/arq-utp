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
import useServiceForm from "../hooks/useServiceForm";
import { TEXTS, FIELDS, ModalMode } from "../content/service.content";
import { useFetchCategories } from "@/modules/Apps/Categories/hooks/useCatoryService";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated?: (data: any) => void;
  mode?: ModalMode;
  initialData?: {
    id?: string;
    nombre?: string;
    descripcion?: string;
    precioBase?: number;
    categoriaId?: string;
    userId?: string;
    disponible?: boolean;
    status?: boolean;
  };
}

const CreateServiceForm: React.FC<Props> = ({
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
  } = useServiceForm({ mode, initialData, open, onClose, onCreated });

  const { data: categories, loading: categoriesLoading } = useFetchCategories();

  const body = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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

        <Box sx={{ flex: 1 }}>
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
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.descripcion}
            helperText={formState.errors.descripcion?.message}
          />
        </Box>
      </Box>

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
            {FIELDS.precioBase}
          </Typography>
          <TextField
            {...register("precioBase", { valueAsNumber: true })}
            type='number'
            disabled={isView}
            fullWidth
            InputProps={{ style: { borderRadius: 8 } }}
            error={!!formState.errors.precioBase}
            helperText={formState.errors.precioBase?.message}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            component='h5'
            sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
            className='text-black'>
            {FIELDS.categoriaId}
          </Typography>
          <Controller
            name='categoriaId'
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!formState.errors.categoriaId}>
                <Select
                  {...field}
                  disabled={isView || categoriesLoading}
                  displayEmpty
                  sx={{ borderRadius: 1 }}>
                  <MenuItem value='' disabled>
                    Seleccionar categoría
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.nombre}
                    </MenuItem>
                  ))}
                </Select>
                {formState.errors.categoriaId && (
                  <FormHelperText>
                    {formState.errors.categoriaId.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>
      </Box>

      <Box>
        <Typography
          component='h5'
          sx={{ fontWeight: 500, fontSize: "14px", mb: "12px" }}
          className='text-black'>
          {FIELDS.userId}
        </Typography>
        <TextField
          {...register("userId")}
          disabled={isView}
          fullWidth
          InputProps={{ style: { borderRadius: 8 } }}
          error={!!formState.errors.userId}
          helperText={formState.errors.userId?.message}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Controller
          name='disponible'
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={field.value || false}
                  onChange={(e) => field.onChange(e.target.checked)}
                  disabled={isView}
                />
              }
              label={FIELDS.disponible}
            />
          )}
        />
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={field.value || false}
                  onChange={(e) => field.onChange(e.target.checked)}
                  disabled={isView}
                />
              }
              label={FIELDS.status}
            />
          )}
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

export default CreateServiceForm;
