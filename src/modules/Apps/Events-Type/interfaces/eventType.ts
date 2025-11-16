export interface IEventType {
  id?: string;
  nombre: string;
  descripcion: string;
  userId: string;
  createdAt?: string;
}

export type CreateEventTypeDTO = Pick<
  IEventType,
  | "nombre"
  | "descripcion"
  | "userId"
>;

export type UpdateEventTypeDTO = Partial<CreateEventTypeDTO>;
