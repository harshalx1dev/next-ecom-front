import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (categoryId: string): Promise<Category> => {
  const url = `${URL}/${categoryId}`;
  
  const categoryRes = await fetch(url);
  const body = await categoryRes.json();


  return body.data;
}