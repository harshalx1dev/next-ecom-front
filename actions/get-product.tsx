import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (productId: string): Promise<Product> => {
  const url = `${URL}/${productId}`;
  
  const productsRes = await fetch(url);
  const body = await productsRes.json();


  return body.data;
}