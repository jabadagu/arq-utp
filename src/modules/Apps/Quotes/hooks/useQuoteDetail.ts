"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/quote.content";
import { IQuote } from "../interfaces/quote";
import { quoteService } from "../quote.service";

export const useQuoteDetail = (id?: string, enabled = true) => {
  return useQuery<IQuote | null>({
    queryKey: QUERY_KEYS.QUOTE(id),
    queryFn: async () => {
      if (!id) return null;
      return await quoteService.getById(id);
    },
    enabled: !!id && enabled,
  });
};
