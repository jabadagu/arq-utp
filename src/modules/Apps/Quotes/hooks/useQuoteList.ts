import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/quote.content";
import { IQuote } from "../interfaces/quote";
import { quoteService } from "../quote.service";

export const useFetchQuotes = () => {
  const query = useQuery<IQuote[]>({
    queryKey: QUERY_KEYS.QUOTES,
    queryFn: async () => {
      const res = await quoteService.fetchQuotes();
      return res;
    },
  });

  return {
    data: query.data ?? [],
    loading: query.isLoading,
    refetch: query.refetch,
  };
};
