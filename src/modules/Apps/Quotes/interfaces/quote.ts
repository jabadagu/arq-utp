export interface IQuote {
  id?: string;
  clienteId: string;
  tipoEventoId: string;
  nombreEvento: string;
  fechaEvento: string;
  horaEvento: string;
  numeroInvitados: number;
  ubicacion: string;
  estadoActualId: string;
  observaciones: string;
  status: boolean;
  createdAt?: string;
}

export type CreateQuoteDTO = Pick<
  IQuote,
  | "clienteId"
  | "tipoEventoId"
  | "nombreEvento"
  | "fechaEvento"
  | "horaEvento"
  | "numeroInvitados"
  | "ubicacion"
  | "estadoActualId"
  | "observaciones"
  | "status"
>;

export type UpdateQuoteDTO = Partial<CreateQuoteDTO>;
