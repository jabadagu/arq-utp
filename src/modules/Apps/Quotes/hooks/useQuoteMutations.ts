"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS, TOAST_MESSAGES } from "../content/quote.content";
import { toast } from "sonner";
import {
  IQuote,
  CreateQuoteDTO,
  UpdateQuoteDTO,
} from "../interfaces/quote";
import { quoteService } from "../quote.service";

export type CreateQuotePayload = CreateQuoteDTO;

export type UpdateQuotePayload = UpdateQuoteDTO & {
  id: string;
};

export const useQuoteMutations = (
  onCreated?: (d: IQuote) => void,
  onClose?: () => void
) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation<IQuote, Error, CreateQuotePayload>({
    mutationFn: async (payload: CreateQuotePayload) => {
      return await quoteService.create(payload);
    },
    onSuccess: (data: IQuote) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.QUOTES });
      if (onCreated) onCreated(data);
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.createSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.createError);
    },
  });

  const updateMutation = useMutation<IQuote, Error, UpdateQuotePayload>({
    mutationFn: async (payload: UpdateQuotePayload) => {
      const { id, ...body } = payload;
      return await quoteService.update(id, body);
    },
    onSuccess: (data: IQuote) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.QUOTES });
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
      await quoteService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.QUOTES });
      if (onClose) onClose();
      toast.success(TOAST_MESSAGES.deleteSuccess);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.deleteError);
    },
  });

  return { createMutation, updateMutation, deleteMutation };
};
