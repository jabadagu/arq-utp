import { axiosInstanceService } from "@/config/axios";
import {
  IService,
  CreateServiceDTO,
  UpdateServiceDTO,
} from "@/modules/Apps/Services/interfaces/service";

export class ServiceService {
  async fetchServices(): Promise<IService[]> {
    const res = await axiosInstanceService.get<IService[]>("/servicios/list");
    return res.data;
  }

  async getById(id: string): Promise<IService | null> {
    try {
      const res = await axiosInstanceService.get(`/servicios/listbyid/${id}`);
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      return data as IService | null;
    } catch (err: unknown) {
      if (
        (err as { response?: { status?: number } })?.response?.status === 404
      ) {
        return null;
      }
      throw err;
    }
  }

  async create(payload: CreateServiceDTO): Promise<IService> {
    const res = await axiosInstanceService.post("/servicios/create", payload);
    return res.data as IService;
  }

  async update(id: string, payload: UpdateServiceDTO): Promise<IService> {
    const res = await axiosInstanceService.put(
      `/servicios/updatebyid/${id}`,
      payload
    );
    return res.data as IService;
  }

  async delete(id: string): Promise<void> {
    await axiosInstanceService.delete(`/servicios/deletebyid/${id}`);
  }
}

export const serviceService = new ServiceService();
