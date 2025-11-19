"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS, TOAST_MESSAGES } from "../content/category.content";
import { toast } from "sonner";
import { ICategoryService } from "../interfaces/categories-service";
import { categoryService } from "../category.service";

// Reuse ICategoryService with Partial for payloads
export type CreateCategoryPayload = Omit<
  Partial<ICategoryService>,
  "userId"
> & {
  nombre: string;
  descripcion: string;
  userId: string;
};

export type UpdateCategoryPayload = Omit<
  Partial<ICategoryService>,
  "id" | "userId"
> & {
  id: string | number;
  nombre: string;
  descripcion: string;
  userId: string;
};

export const useCategoryMutations = (
  onCreated?: (d: ICategoryService) => void,
  onClose?: () => void
) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<
    ICategoryService,
    Error,
    CreateCategoryPayload
  >({
    mutationFn: async (payload: CreateCategoryPayload) => {
      // categoryService expects userId as string (ICategoryService.userId), coerce here
      const body = { ...payload, userId: String(payload.userId) };
      return await categoryService.create(body);
    },
    onSuccess: (data: ICategoryService) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORIES });
      if (onCreated) onCreated(data);
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.createSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.createError);
    },
  });

  const updateMutation = useMutation<
    ICategoryService,
    Error,
    UpdateCategoryPayload
  >({
    mutationFn: async (payload: UpdateCategoryPayload) => {
      const { id, ...body } = payload;
      const bodyWithStringUser = {
        ...body,
        status: 1,
        userId: String((body as any).userId),
      };
      return await categoryService.update(id, bodyWithStringUser as any);
    },
    onSuccess: (data: ICategoryService) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORIES });
      if (onCreated) onCreated(data);
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.updateSuccess);
      // intentionally no success toast for update (per request), keep error toast
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.updateError);
    },
  });

  const deleteMutation = useMutation<void, Error, string | number>({
    mutationFn: async (id: string | number) => {
      await categoryService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORIES });
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.deleteSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.deleteError);
    },
  });

  return { createMutation, updateMutation, deleteMutation };
};
