import type {
  GetApodRequestRecord,
  GetApodResponseRecord,
} from "@/entities/news/apod/model/types";
import { callNasaApi } from "@/shared/api";
import { ENV_CONFIG } from "@/shared/config/env/env.config";

const ApiKey = ENV_CONFIG.API_KEY_NASA;

/**
 * Service type for News APOD
 */
export type NewsApodServiceType = {
  getApod(params: GetApodRequestRecord): Promise<GetApodResponseRecord>;
};

class NewsApodService implements NewsApodServiceType {
  async getApod(
    params: GetApodRequestRecord, // params?: GetNewsApodRequestRecord,
  ): Promise<GetApodResponseRecord> {
    return await callNasaApi<GetApodResponseRecord>({
      url: `planetary/apod?api_key=${ApiKey}`,
      method: "GET",
      params: {
        params,
        api_key: ApiKey,
      },
    });
  }
}

export const newsApodService: NewsApodServiceType = new NewsApodService();
