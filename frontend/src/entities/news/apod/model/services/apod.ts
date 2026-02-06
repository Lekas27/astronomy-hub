import type { GetApodResponseRecord } from "@/entities/news/apod/model/types";
import { callNasaApi } from "@/shared/api";
import { ENV_CONFIG } from "@/shared/config/env/env.config";

const ApiKey = ENV_CONFIG.API_KEY_NASA;

/**
 * Service type for News APOD
 */
export type NewsApodServiceType = {
  getApod(): Promise<GetApodResponseRecord>;
};

class NewsApodService implements NewsApodServiceType {
  async getApod() // params?: GetNewsApodRequestRecord,
  : Promise<GetApodResponseRecord> {
    return await callNasaApi<GetApodResponseRecord>({
      url: `planetary/apod?api_key=${ApiKey}`,
      method: "GET",
      //   params, // directly pass the payload as query params
    });
  }
}

export const newsApodService: NewsApodServiceType = new NewsApodService();
