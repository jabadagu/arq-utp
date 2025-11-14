import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/category.content";
import { ICategoryService } from "../interfaces/categories-service";
import { categoryService } from "../category.service";

export const useFetchCategories = () => {
  const query = useQuery<ICategoryService[]>({
    queryKey: QUERY_KEYS.CATEGORIES,
    queryFn: async () => {
      const res = await categoryService.fetchCategories();
      return res;
    },
  });

  return {
    data: query.data ?? [],
    loading: query.isLoading,
    refetch: query.refetch,
  };
};
