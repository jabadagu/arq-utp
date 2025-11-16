"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServiceDetail } from "./useServiceDetail";
import {
  useServiceMutations,
  CreateServicePayload,
  UpdateServicePayload,
} from "./useServiceMutations";
import { VALIDATION_MESSAGES, ModalMode } from "../content/service.content";

const schema = z.object({
  nombre: z.string().min(1, VALIDATION_MESSAGES.nombreRequired),
  descripcion: z.string().min(1, VALIDATION_MESSAGES.descripcionRequired),
  precioBase: z.number().positive(VALIDATION_MESSAGES.precioBaseMinimum),
  categoriaId: z.string().min(1, VALIDATION_MESSAGES.categoriaIdRequired),
  userId: z.string().min(1, VALIDATION_MESSAGES.userIdRequired),
  disponible: z.boolean(),
  status: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface UseServiceFormParams {
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
  open: boolean;
  onClose?: () => void;
  onCreated?: (d: any) => void;
}

export const useServiceForm = ({
  mode = ModalMode.CREATE,
  initialData,
  open,
  onClose,
  onCreated,
}: UseServiceFormParams) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: initialData?.nombre ?? "",
      descripcion: initialData?.descripcion ?? "",
      precioBase: initialData?.precioBase ?? 0,
      categoriaId: initialData?.categoriaId ?? "",
      userId: initialData?.userId ?? "",
      disponible: initialData?.disponible ?? true,
      status: initialData?.status ?? true,
    },
  });

  const { register, handleSubmit, reset, formState, control } = form;

  useEffect(() => {
    if (open) {
      reset({
        nombre: initialData?.nombre ?? "",
        descripcion: initialData?.descripcion ?? "",
        precioBase: initialData?.precioBase ?? 0,
        categoriaId: initialData?.categoriaId ?? "",
        userId: initialData?.userId ?? "",
        disponible: initialData?.disponible ?? true,
        status: initialData?.status ?? true,
      });
    }
  }, [open, initialData, reset]);

  const serviceId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useServiceDetail(
    serviceId,
    mode !== ModalMode.CREATE
  );

  const { createMutation, updateMutation, deleteMutation } =
    useServiceMutations(onCreated, onClose);

  const isView = mode === ModalMode.VIEW;

  const onSubmit = async (values: FormValues) => {
    if (isView) {
      if (onClose) onClose();
      return;
    }

    try {
      if (mode === ModalMode.CREATE) {
        await createMutation.mutateAsync(values as CreateServicePayload);
      } else if (mode === ModalMode.EDIT) {
        const payload: UpdateServicePayload = {
          id: initialData?.id as string,
          ...values,
        };
        await updateMutation.mutateAsync(payload);
      }
    } catch (err) {
      console.error("mutation error", err);
    }
  };

  return {
    register,
    handleSubmit,
    formState,
    isView,
    detailLoading,
    createMutation,
    updateMutation,
    deleteMutation,
    onSubmit,
    control,
  } as const;
};

export default useServiceForm;
