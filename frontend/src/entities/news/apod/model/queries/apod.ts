import { useQuery, type UseQueryResult } from "@tanstack/react-query";

import { newsApodService } from "@/entities/news/apod/model/services/apod";
import type { GetApodResponseRecord } from "@/entities/news/apod/model/types";
import type { ApiErrorResponseRecord } from "@/shared/api/types/errors";
import { ReactQueryKeys } from "@/shared/lib/react-query-keys/queries";
import type { QueryOptionsRecord } from "@/shared/lib/react-query-types/query";

export const useGetApod = (
  options?: QueryOptionsRecord<GetApodResponseRecord, ApiErrorResponseRecord>,
): UseQueryResult<GetApodResponseRecord, ApiErrorResponseRecord> =>
  useQuery<GetApodResponseRecord, ApiErrorResponseRecord>({
    queryKey: [ReactQueryKeys.APOD],
    queryFn: () => newsApodService.getApod(),
    refetchOnWindowFocus: false,
    ...options,
  });
