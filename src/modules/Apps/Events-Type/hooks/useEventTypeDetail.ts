"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../content/eventType.content";
import { IEventType } from "../interfaces/eventType";
import { eventTypeService } from "../eventType.service";

export const useEventTypeDetail = (id?: string, enabled = true) => {
  return useQuery<IEventType | null>({
    queryKey: QUERY_KEYS.EVENT_TYPE(id),
    queryFn: async () => {
      if (!id) return null;
      return await eventTypeService.getById(id);
    },
    enabled: !!id && enabled,
  });
};
