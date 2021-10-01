export const SERVER_URL =
  process.env.BUILD_SERVER_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  "http://localhost:3000/api/";

export const DefaultProductsLimit = 10;
