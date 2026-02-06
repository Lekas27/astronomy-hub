import { useQuery, type UseQueryResult } from "@tanstack/react-query";

import { newsAsteroidsNeoWsService } from "@/entities/news/asteroids-neo-ws/model/services/asteroids-neo-ws";
import type {
  GetResponseAsteroidNeoWsRecord,
  GetAsteroidNeoWsRequestRecord,
} from "@/entities/news/asteroids-neo-ws/model/types";
import type { ApiErrorResponseRecord } from "@/shared/api/types/errors";
import { ReactQueryKeys } from "@/shared/lib/react-query-keys/queries";
import type { QueryOptionsRecord } from "@/shared/lib/react-query-types/query";

export const useGetNeoWsFeed = (
  params: GetAsteroidNeoWsRequestRecord,
  options?: QueryOptionsRecord<
    GetResponseAsteroidNeoWsRecord,
    ApiErrorResponseRecord
  >,
): UseQueryResult<GetResponseAsteroidNeoWsRecord, ApiErrorResponseRecord> =>
  useQuery<GetResponseAsteroidNeoWsRecord, ApiErrorResponseRecord>({
    queryKey: [ReactQueryKeys.NEO_WS_FEED, params],
    queryFn: () => newsAsteroidsNeoWsService.getNeoWsFeed(params),
    refetchOnWindowFocus: false,
    ...options,
  });
