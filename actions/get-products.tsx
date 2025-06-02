import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async ({ categoryId, colorId, isFeatured, sizeId }: Query): Promise<Product[]> => {
  const newUrl = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId,
      sizeId,
      categoryId,
      isFeatured
    }
  })
  
  const productsRes = await fetch(newUrl);
  const body = await productsRes.json();
  return body.data;
}