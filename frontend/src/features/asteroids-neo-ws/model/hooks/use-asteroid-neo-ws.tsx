import { useGetNeoWsFeed } from "@/entities/news/asteroids-neo-ws/model/queries/asteroids-neo-ws";
import type { GetAsteroidNeoWsRequestRecord } from "@/entities/news/asteroids-neo-ws/model/types";

type Props = {
  startDate: string;
  endDate: string;
};

export const useAsteroidNeoWs = ({ startDate, endDate }: Props) => {
  const params: GetAsteroidNeoWsRequestRecord = {
    start_date: startDate,
    end_date: endDate,
  };
  const { data: neoData, isFetching, error } = useGetNeoWsFeed(params);

  return {
    neoData,
    isFetching,
    error,
  };
};
