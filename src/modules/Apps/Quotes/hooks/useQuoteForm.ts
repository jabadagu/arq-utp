"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuoteDetail } from "./useQuoteDetail";
import {
  useQuoteMutations,
  CreateQuotePayload,
  UpdateQuotePayload,
} from "./useQuoteMutations";
import { VALIDATION_MESSAGES, ModalMode } from "../content/quote.content";

const schema = z.object({
  clienteId: z.string().min(1, VALIDATION_MESSAGES.clienteIdRequired),
  tipoEventoId: z.string().min(1, VALIDATION_MESSAGES.tipoEventoIdRequired),
  nombreEvento: z.string().min(1, VALIDATION_MESSAGES.nombreEventoRequired),
  fechaEvento: z.string().min(1, VALIDATION_MESSAGES.fechaEventoRequired),
  horaEvento: z.string().min(1, VALIDATION_MESSAGES.horaEventoRequired),
  numeroInvitados: z
    .number()
    .positive(VALIDATION_MESSAGES.numeroInvitadosMinimum),
  ubicacion: z.string().min(1, VALIDATION_MESSAGES.ubicacionRequired),
  estadoActualId: z.string().min(1, VALIDATION_MESSAGES.estadoActualIdRequired),
  observaciones: z.string().min(1, VALIDATION_MESSAGES.observacionesRequired),
  status: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface UseQuoteFormParams {
  mode?: ModalMode;
  initialData?: {
    id?: string;
    clienteId?: string;
    tipoEventoId?: string;
    nombreEvento?: string;
    fechaEvento?: string;
    horaEvento?: string;
    numeroInvitados?: number;
    ubicacion?: string;
    estadoActualId?: string;
    observaciones?: string;
    status?: boolean;
  };
  open: boolean;
  onClose?: () => void;
  onCreated?: (d: any) => void;
}

export const useQuoteForm = ({
  mode = ModalMode.CREATE,
  initialData,
  open,
  onClose,
  onCreated,
}: UseQuoteFormParams) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      clienteId: initialData?.clienteId ?? "",
      tipoEventoId: initialData?.tipoEventoId ?? "",
      nombreEvento: initialData?.nombreEvento ?? "",
      fechaEvento: initialData?.fechaEvento ?? "",
      horaEvento: initialData?.horaEvento ?? "",
      numeroInvitados: initialData?.numeroInvitados ?? 0,
      ubicacion: initialData?.ubicacion ?? "",
      estadoActualId: initialData?.estadoActualId ?? "",
      observaciones: initialData?.observaciones ?? "",
      status: initialData?.status ?? true,
    },
  });

  const { register, handleSubmit, reset, formState, control } = form;

  useEffect(() => {
    if (open) {
      reset({
        clienteId: initialData?.clienteId ?? "",
        tipoEventoId: initialData?.tipoEventoId ?? "",
        nombreEvento: initialData?.nombreEvento ?? "",
        fechaEvento: initialData?.fechaEvento ?? "",
        horaEvento: initialData?.horaEvento ?? "",
        numeroInvitados: initialData?.numeroInvitados ?? 0,
        ubicacion: initialData?.ubicacion ?? "",
        estadoActualId: initialData?.estadoActualId ?? "",
        observaciones: initialData?.observaciones ?? "",
        status: initialData?.status ?? true,
      });
    }
  }, [open, initialData, reset]);

  const quoteId = initialData?.id;
  const { data: detail, isLoading: detailLoading } = useQuoteDetail(
    quoteId,
    mode !== ModalMode.CREATE
  );

  const { createMutation, updateMutation, deleteMutation } = useQuoteMutations(
    onCreated,
    onClose
  );

  const isView = mode === ModalMode.VIEW;

  const onSubmit = async (values: FormValues) => {
    if (isView) {
      if (onClose) onClose();
      return;
    }

    try {
      if (mode === ModalMode.CREATE) {
        await createMutation.mutateAsync(values as CreateQuotePayload);
      } else if (mode === ModalMode.EDIT) {
        const payload: UpdateQuotePayload = {
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

export default useQuoteForm;
