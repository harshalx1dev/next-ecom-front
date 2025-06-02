import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const categoriesRes = await fetch(URL);
  const body = await categoriesRes.json();
  return body.data;
}