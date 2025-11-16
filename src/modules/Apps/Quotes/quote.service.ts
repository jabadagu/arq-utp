import { axiosInstanceQuote } from "@/config/axios";
import { IQuote, CreateQuoteDTO, UpdateQuoteDTO } from "./interfaces/quote";

export class QuoteService {
  async fetchQuotes(): Promise<IQuote[]> {
    const res = await axiosInstanceQuote.get<IQuote[]>("/cotizaciones/list");
    return res.data;
  }

  async getById(id: string): Promise<IQuote | null> {
    try {
      const res = await axiosInstanceQuote.get(`/cotizaciones/listbyid/${id}`);
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      return data as IQuote | null;
    } catch (err: unknown) {
      if (
        (err as { response?: { status?: number } })?.response?.status === 404
      ) {
        return null;
      }
      throw err;
    }
  }

  async create(payload: CreateQuoteDTO): Promise<IQuote> {
    const res = await axiosInstanceQuote.post("/cotizaciones/create", payload);
    return res.data as IQuote;
  }

  async update(id: string, payload: UpdateQuoteDTO): Promise<IQuote> {
    const res = await axiosInstanceQuote.put(
      `/cotizaciones/updatebyid/${id}`,
      payload
    );
    return res.data as IQuote;
  }

  async delete(id: string): Promise<void> {
    await axiosInstanceQuote.delete(`/cotizaciones/deletebyid/${id}`);
  }
}

export const quoteService = new QuoteService();
