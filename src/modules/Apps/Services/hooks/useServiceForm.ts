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
import { getUserIdFromToken } from "@/shared/utils/jwt-decode";

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
  onClose,
  onCreated,
}: UseServiceFormParams) => {
  const serviceId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useServiceDetail(
    serviceId,
    mode !== ModalMode.CREATE
  );

  const currentData = detail || initialData;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      nombre: currentData?.nombre ?? "",
      descripcion: currentData?.descripcion ?? "",
      precioBase: currentData?.precioBase ?? 0,
      categoriaId: currentData?.categoriaId ?? "",
      userId: currentData?.userId ?? "",
      disponible: currentData?.disponible ?? true,
      status: currentData?.status ?? true,
    },
  });

  const { register, handleSubmit, reset, formState, control, watch } = form;

  useEffect(() => {
    if (currentData && (mode === ModalMode.EDIT || mode === ModalMode.VIEW)) {
      const formData = {
        nombre: currentData.nombre ?? "",
        descripcion: currentData.descripcion ?? "",
        precioBase: currentData.precioBase ?? 0,
        categoriaId: currentData.categoriaId ?? "",
        userId: currentData.userId ?? "",
        disponible: currentData.disponible ?? true,
        status: currentData.status ?? true,
      };

      reset(formData);
    }
  }, [currentData, mode, reset]);

  const { createMutation, updateMutation, deleteMutation } =
    useServiceMutations(onCreated, onClose);

  const isView = mode === ModalMode.VIEW;

  const onSubmit = async (values: FormValues) => {
    if (isView) {
      if (onClose) onClose();
      return;
    }

    const userId = getUserIdFromToken();
    const submitValues = { ...values, userId };

    if (mode === ModalMode.CREATE) {
      await createMutation.mutateAsync(submitValues as CreateServicePayload);
    } else if (mode === ModalMode.EDIT) {
      const payload: UpdateServicePayload = {
        id: initialData?.id as string,
        ...submitValues,
      };
      await updateMutation.mutateAsync(payload);
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
