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
  const categoryId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useCategoryDetail(
    categoryId,
    mode !== ModalMode.CREATE
  );

  // Debug: mostrar qué datos tenemos
  console.log("Category Detail Debug:", {
    categoryId,
    detail,
    detailLoading,
    initialData,
    mode,
  });

  // Log detallado de la estructura de datos
  if (detail) {
    console.log("Category Detail keys:", Object.keys(detail));
    console.log("Category Detail structure:", JSON.stringify(detail, null, 2));
  }
  if (initialData) {
    console.log("Category InitialData keys:", Object.keys(initialData));
    console.log(
      "Category InitialData structure:",
      JSON.stringify(initialData, null, 2)
    );
  }

  // Usar detail si está disponible, sino usar initialData
  const currentData = detail || initialData;
  console.log("Current category data being used:", currentData);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      nombre: currentData?.nombre || currentData?.name || "",
      descripcion: currentData?.descripcion || currentData?.description || "",
      userId: currentData?.userId || "",
    },
  });

  const { register, handleSubmit, reset, formState, watch } = form;

  // Watch the values to debug
  const watchedValues = watch();

  useEffect(() => {
    if (currentData && (mode === ModalMode.EDIT || mode === ModalMode.VIEW)) {
      console.log("Resetting category form with data:", currentData);
      console.log("Current watched values:", watchedValues);

      const formData = {
        nombre: currentData.nombre || currentData.name || "",
        descripcion: currentData.descripcion || currentData.description || "",
        userId: currentData.userId || "",
      };

      console.log("Setting category form data:", formData);
      reset(formData);
    }
  }, [currentData, mode, reset]);

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
    watchedValues,
  } as const;
};

export default useCategoryForm;
