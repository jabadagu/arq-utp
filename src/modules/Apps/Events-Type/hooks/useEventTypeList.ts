import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/eventType.content";
import { IEventType } from "../interfaces/eventType";
import { eventTypeService } from "../eventType.service";

export const useFetchEventTypes = () => {
  const query = useQuery<IEventType[]>({
    queryKey: QUERY_KEYS.EVENT_TYPES,
    queryFn: async () => {
      const res = await eventTypeService.fetchEventTypes();
      return res;
    },
  });

  return {
    data: query.data ?? [],
    loading: query.isLoading,
    refetch: query.refetch,
  };
};
