"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS, TOAST_MESSAGES } from "../content/service.content";
import { toast } from "sonner";
import {
  IService,
  CreateServiceDTO,
  UpdateServiceDTO,
} from "../interfaces/service";
import { serviceService } from "../service.service";

export type CreateServicePayload = CreateServiceDTO;

export type UpdateServicePayload = UpdateServiceDTO & {
  id: string;
};

export const useServiceMutations = (
  onCreated?: (d: IService) => void,
  onClose?: () => void
) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<IService, Error, CreateServicePayload>({
    mutationFn: async (payload: CreateServicePayload) => {
      return await serviceService.create(payload);
    },
    onSuccess: (data: IService) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SERVICES });
      if (onCreated) onCreated(data);
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.createSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.createError);
    },
  });

  const updateMutation = useMutation<IService, Error, UpdateServicePayload>({
    mutationFn: async (payload: UpdateServicePayload) => {
      const { id, ...body } = payload;
      return await serviceService.update(id, body);
    },
    onSuccess: (data: IService) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SERVICES });
      if (onCreated) onCreated(data);
      if (onClose) onClose();
      // intentionally no success toast for update (per request), keep error toast
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.updateError);
    },
  });

  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await serviceService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SERVICES });
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.deleteSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.deleteError);
    },
  });

  return { createMutation, updateMutation, deleteMutation };
};
