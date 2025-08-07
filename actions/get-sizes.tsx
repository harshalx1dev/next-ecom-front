import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (categoryId: string): Promise<Size[]> => {
  const sizesRes = await fetch(URL + (categoryId ? categoryId : ''));
  const body = await sizesRes.json();
  return body.data;
}