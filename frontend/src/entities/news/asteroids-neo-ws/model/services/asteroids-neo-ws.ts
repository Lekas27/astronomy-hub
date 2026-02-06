import type {
  GetAsteroidNeoWsRequestRecord,
  GetResponseAsteroidNeoWsRecord,
} from "@/entities/news/asteroids-neo-ws/model/types";
import { callNasaApi } from "@/shared/api";
import { ENV_CONFIG } from "@/shared/config/env/env.config";

const ApiKey = ENV_CONFIG.API_KEY_NASA;

/**
 * Service type for News Asteroids NeoWs
 */
export type NewsAsteroidsNeoWsServiceType = {
  getNeoWsFeed(
    params: GetAsteroidNeoWsRequestRecord,
  ): Promise<GetResponseAsteroidNeoWsRecord>;
};

class NewsAsteroidsNeoWsService implements NewsAsteroidsNeoWsServiceType {
  async getNeoWsFeed(
    params: GetAsteroidNeoWsRequestRecord,
  ): Promise<GetResponseAsteroidNeoWsRecord> {
    return await callNasaApi<GetResponseAsteroidNeoWsRecord>({
      url: "neo/rest/v1/feed",
      method: "GET",
      params: {
        ...params,
        api_key: ApiKey,
      },
    });
  }
}

export const newsAsteroidsNeoWsService: NewsAsteroidsNeoWsServiceType =
  new NewsAsteroidsNeoWsService();
