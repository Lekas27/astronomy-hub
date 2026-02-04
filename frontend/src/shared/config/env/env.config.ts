type EnvConfig = {
  PUBLIC_API_URL: string;
  API_KEY_NASA: string;
};

export const ENV_CONFIG: EnvConfig = {
  PUBLIC_API_URL: import.meta.env.VITE_PUBLIC_API_URL,
  API_KEY_NASA: import.meta.env.VITE_API_KEY_NASA,
};
