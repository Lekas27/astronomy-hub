import type { AsteroidNeoWsRecord } from "./asteroids-neo-ws";

/**
 * Request payload to fetch Asteroids NeoWs feed
 */
export type GetAsteroidNeoWsRequestRecord = {
  start_date: string;
  end_date?: string;
  detailed?: boolean;
};

/**
 * Response payload for Asteroids NeoWs feed
 */
export type GetResponseAsteroidNeoWsRecord = AsteroidNeoWsRecord;
