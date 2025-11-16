"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEventTypeDetail } from "./useEventTypeDetail";
import {
  useEventTypeMutations,
  CreateEventTypePayload,
  UpdateEventTypePayload,
} from "./useEventTypeMutations";
import { VALIDATION_MESSAGES, ModalMode } from "../content/eventType.content";

const schema = z.object({
  nombre: z.string().min(1, VALIDATION_MESSAGES.nombreRequired),
  descripcion: z.string().min(1, VALIDATION_MESSAGES.descripcionRequired),
  userId: z.string().min(1, VALIDATION_MESSAGES.userIdRequired),
});

type FormValues = z.infer<typeof schema>;

interface UseEventTypeFormParams {
  mode?: ModalMode;
  initialData?: {
    id?: string;
    nombre?: string;
    descripcion?: string;
    userId?: string;
  };
  open: boolean;
  onClose?: () => void;
  onCreated?: (d: any) => void;
}

export const useEventTypeForm = ({
  mode = ModalMode.CREATE,
  initialData,
  open,
  onClose,
  onCreated,
}: UseEventTypeFormParams) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: initialData?.nombre ?? "",
      descripcion: initialData?.descripcion ?? "",
      userId: initialData?.userId ?? "",
    },
  });

  const { register, handleSubmit, reset, formState, control } = form;

  useEffect(() => {
    if (open) {
      reset({
        nombre: initialData?.nombre ?? "",
        descripcion: initialData?.descripcion ?? "",
        userId: initialData?.userId ?? "",
      });
    }
  }, [open, initialData, reset]);

  const eventTypeId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useEventTypeDetail(
    eventTypeId,
    mode !== ModalMode.CREATE
  );

  const { createMutation, updateMutation, deleteMutation } =
    useEventTypeMutations(onCreated, onClose);

  const isView = mode === ModalMode.VIEW;

  const onSubmit = async (values: FormValues) => {
    if (isView) {
      if (onClose) onClose();
      return;
    }

    try {
      if (mode === ModalMode.CREATE) {
        await createMutation.mutateAsync(values as CreateEventTypePayload);
      } else if (mode === ModalMode.EDIT) {
        const payload: UpdateEventTypePayload = {
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

export default useEventTypeForm;
