import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/service.content";
import { IService } from "../interfaces/service";
import { serviceService } from "../service.service";

export const useFetchServices = () => {
  const query = useQuery<IService[]>({
    queryKey: QUERY_KEYS.SERVICES,
    queryFn: async () => {
      const res = await serviceService.fetchServices();
      return res;
    },
  });

  return {
    data: query.data ?? [],
    loading: query.isLoading,
    refetch: query.refetch,
  };
};
