import { axiosInstanceCategory } from "@/config/axios";
import { ICategoryService } from "@/modules/Apps/Categories/interfaces/categories-service";

export type CreateCategoryDTO = Pick<
  ICategoryService,
  "nombre" | "descripcion" | "userId"
>;

export type UpdateCategoryDTO = Pick<
  ICategoryService,
  "nombre" | "descripcion" | "userId"
>;

export class CategoryService {
  async fetchCategories(): Promise<ICategoryService[]> {
    const res = await axiosInstanceCategory.get<ICategoryService[]>(
      "/categorias-servicio/list"
    );

    return res.data;
  }

  async getById(id: string | number) {
    const res = await axiosInstanceCategory.get(
      `/categorias-servicio/listbyid/${id}`
    );
    // backend sometimes returns array
    const data = Array.isArray(res.data) ? res.data[0] : res.data;
    return data as ICategoryService | null;
  }

  async create(payload: CreateCategoryDTO): Promise<ICategoryService> {
    const body = { ...payload, userId: String(payload.userId) };
    const res = await axiosInstanceCategory.post(
      "/categorias-servicio/create",
      body
    );
    return res.data as ICategoryService;
  }

  async update(
    id: string | number,
    bodyPayload: UpdateCategoryDTO
  ): Promise<ICategoryService> {
    const body = { ...bodyPayload, userId: String(bodyPayload.userId) };
    const res = await axiosInstanceCategory.put(
      `/categorias-servicio/updatebyid/${id}`,
      body
    );
    return res.data as ICategoryService;
  }

  async delete(id: string | number): Promise<void> {
    await axiosInstanceCategory.delete(`/categorias-servicio/deletebyid/${id}`);
  }
}

export const categoryService = new CategoryService();
