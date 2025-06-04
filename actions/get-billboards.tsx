import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboards = async (): Promise<Billboard[]> => {
  const billboardsRes = await fetch(URL);
  const body = await billboardsRes.json();
  return body.data;
}