export const baseApiUrl =
  typeof window == 'undefined' || process.env?.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : (process.env?.VERCEL_URL as string);
