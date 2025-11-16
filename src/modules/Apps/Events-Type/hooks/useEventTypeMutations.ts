"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS, TOAST_MESSAGES } from "../content/eventType.content";
import { toast } from "sonner";
import {
  IEventType,
  CreateEventTypeDTO,
  UpdateEventTypeDTO,
} from "../interfaces/eventType";
import { eventTypeService } from "../eventType.service";

export type CreateEventTypePayload = CreateEventTypeDTO;

export type UpdateEventTypePayload = UpdateEventTypeDTO & {
  id: string;
};

export const useEventTypeMutations = (
  onCreated?: (d: IEventType) => void,
  onClose?: () => void
) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<IEventType, Error, CreateEventTypePayload>({
    mutationFn: async (payload: CreateEventTypePayload) => {
      return await eventTypeService.create(payload);
    },
    onSuccess: (data: IEventType) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.EVENT_TYPES });
      if (onCreated) onCreated(data);
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.createSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.createError);
    },
  });

  const updateMutation = useMutation<IEventType, Error, UpdateEventTypePayload>({
    mutationFn: async (payload: UpdateEventTypePayload) => {
      const { id, ...body } = payload;
      return await eventTypeService.update(id, body);
    },
    onSuccess: (data: IEventType) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.EVENT_TYPES });
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
      await eventTypeService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.EVENT_TYPES });
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.deleteSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.deleteError);
    },
  });

  return { createMutation, updateMutation, deleteMutation };
};
