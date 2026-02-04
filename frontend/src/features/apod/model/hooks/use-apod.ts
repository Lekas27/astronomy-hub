import { useGetApod } from "@/entities/news/apod/model/queries/apod";

export const useApod = () => {
  const {
    data: apodData,
    isFetching: isApodDataFetching,
    error: apodError,
  } = useGetApod();

  return {
    apodData,
    isApodDataFetching,
    apodError,
  };
};
