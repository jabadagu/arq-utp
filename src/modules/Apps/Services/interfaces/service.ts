export interface IService {
  id?: string;
  userId: string;
  nombre: string;
  descripcion: string;
  precioBase: number;
  categoriaId: string;
  disponible: boolean;
  status: boolean;
  createdAt?: string;
}

export type CreateServiceDTO = Pick<
  IService,
  | "userId"
  | "nombre"
  | "descripcion"
  | "precioBase"
  | "categoriaId"
  | "disponible"
  | "status"
>;

export type UpdateServiceDTO = Partial<CreateServiceDTO>;
