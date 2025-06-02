import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const billboardRes = await fetch(`${URL}/${id}`);
  const body = await billboardRes.json();
  return body.data;
}