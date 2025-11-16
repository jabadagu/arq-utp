"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/service.content";
import { IService } from "../interfaces/service";
import { serviceService } from "../service.service";

export const useServiceDetail = (id?: string, enabled = true) => {
  return useQuery<IService | null>({
    queryKey: QUERY_KEYS.SERVICE(id),
    queryFn: async () => {
      if (!id) return null;
      return await serviceService.getById(id);
    },
    enabled: !!id && enabled,
  });
};
