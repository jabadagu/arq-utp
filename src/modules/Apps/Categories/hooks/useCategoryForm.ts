"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategoryDetail } from "./useCategoryDetail";
import {
  useCategoryMutations,
  CreateCategoryPayload,
  UpdateCategoryPayload,
} from "./useCategoryMutations";
import { VALIDATION_MESSAGES, ModalMode } from "../content/category.content";
import { getUserIdFromToken } from "@/shared/utils/jwt-decode";

const schema = z.object({
  nombre: z.string().min(1, VALIDATION_MESSAGES.nameRequired),
  descripcion: z.string().min(1, VALIDATION_MESSAGES.descriptionRequired),
  userId: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface UseCategoryFormParams {
  mode?: ModalMode;
  initialData?: {
    id?: string | number;
    name?: string;
    description?: string;
    userId?: string;
    status?: boolean;
  };
  open: boolean;
  onClose?: () => void;
  onCreated?: (d: any) => void;
}

export const useCategoryForm = ({
  mode = ModalMode.CREATE,
  initialData,
  open,
  onClose,
  onCreated,
}: UseCategoryFormParams) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: initialData?.name ?? "",
      descripcion: initialData?.description ?? "",
      userId: initialData?.userId ?? "",
    },
  });

  const { register, handleSubmit, reset, formState, watch } = form;

  useEffect(() => {
    if (open) {
      reset({
        nombre: initialData?.name ?? "",
        descripcion: initialData?.description ?? "",
        userId: initialData?.userId ?? "",
      });
    }
  }, [open, initialData, reset]);

  const categoryId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useCategoryDetail(
    categoryId,
    mode !== ModalMode.CREATE
  );

  useEffect(() => {
    if (detail && mode !== ModalMode.CREATE) {
      reset({
        nombre: detail.nombre,
        descripcion: detail.descripcion,
        userId: detail.userId,
      });
    }
  }, [detail]);

  const { createMutation, updateMutation, deleteMutation } =
    useCategoryMutations(onCreated, onClose);

  const isView = mode === ModalMode.VIEW;

  const onSubmit = async (values: FormValues) => {
    if (isView) {
      if (onClose) onClose();
      return;
    }

    try {
      if (mode === ModalMode.CREATE) {
        const payload: CreateCategoryPayload = {
          ...values,
          userId: getUserIdFromToken(),
        };
        await createMutation.mutateAsync(payload);
      } else if (mode === ModalMode.EDIT) {
        const payload: UpdateCategoryPayload = {
          id: initialData?.id as string | number,
          ...values,
          userId: getUserIdFromToken(),
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
    watch,
  } as const;
};

export default useCategoryForm;
