"use client";

import { useQuery } from "@tanstack/react-query";
import { axiosInstanceCategory } from "@/config/axios";
import { QUERY_KEYS } from "../content/category.content";

export const useCategoryDetail = (id?: string | number, enabled = true) => {
  return useQuery({
    queryKey: QUERY_KEYS.CATEGORY(id),
    queryFn: async () => {
      if (!id) return null;
      try {
        const res = await axiosInstanceCategory.get(
          `/categories/listbyid/${id}`
        );
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        return data ?? null;
      } catch (err: any) {
        if (err?.response?.status === 404) return null;
        throw err;
      }
    },
    enabled: !!id && enabled,
  });
};
