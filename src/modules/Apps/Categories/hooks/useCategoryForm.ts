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

const schema = z.object({
  name: z.string().min(1, VALIDATION_MESSAGES.nameRequired),
  description: z.string().min(1, VALIDATION_MESSAGES.descriptionRequired),
  userId: z.number().positive(VALIDATION_MESSAGES.userRequired),
});

type FormValues = z.infer<typeof schema>;

interface UseCategoryFormParams {
  mode?: ModalMode;
  initialData?: {
    id?: string | number;
    name?: string;
    description?: string;
    userId?: number;
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
      name: initialData?.name ?? "",
      description: initialData?.description ?? "",
      userId: initialData?.userId ?? ("" as unknown as number),
    },
  });

  const { register, handleSubmit, reset, formState } = form;

  useEffect(() => {
    if (open) {
      reset({
        name: initialData?.name ?? "",
        description: initialData?.description ?? "",
        userId: initialData?.userId ?? ("" as unknown as number),
      });
    }
  }, [open, initialData, reset]);

  const categoryId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useCategoryDetail(
    categoryId,
    mode !== ModalMode.CREATE
  );

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
        await createMutation.mutateAsync(values as CreateCategoryPayload);
      } else if (mode === ModalMode.EDIT) {
        const payload: UpdateCategoryPayload = {
          id: initialData?.id as string | number,
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
  } as const;
};

export default useCategoryForm;
