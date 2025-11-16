import { axiosInstanceEventType } from "@/config/axios";
import {
  IEventType,
  CreateEventTypeDTO,
  UpdateEventTypeDTO,
} from "./interfaces/eventType";

export class EventTypeService {
  async fetchEventTypes(): Promise<IEventType[]> {
    const res = await axiosInstanceEventType.get<IEventType[]>(
      "/tipos-evento/list"
    );
    return res.data;
  }

  async getById(id: string): Promise<IEventType | null> {
    try {
      const res = await axiosInstanceEventType.get(
        `/tipos-evento/listbyid/${id}`
      );
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      return data as IEventType | null;
    } catch (err: unknown) {
      if (
        (err as { response?: { status?: number } })?.response?.status === 404
      ) {
        return null;
      }
      throw err;
    }
  }

  async create(payload: CreateEventTypeDTO): Promise<IEventType> {
    const res = await axiosInstanceEventType.post(
      "/tipos-evento/create",
      payload
    );
    return res.data as IEventType;
  }

  async update(id: string, payload: UpdateEventTypeDTO): Promise<IEventType> {
    const res = await axiosInstanceEventType.put(
      `/tipos-evento/updatebyid/${id}`,
      payload
    );
    return res.data as IEventType;
  }

  async delete(id: string): Promise<void> {
    await axiosInstanceEventType.delete(`/tipos-evento/deletebyid/${id}`);
  }
}

export const eventTypeService = new EventTypeService();
