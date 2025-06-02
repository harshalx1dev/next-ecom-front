import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const sizesRes = await fetch(URL);
  const body = await sizesRes.json();
  return body.data;
}