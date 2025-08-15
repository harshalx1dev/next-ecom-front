import { Order } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

export const getOrders = async (): Promise<Order[]> => {
  const ordersRes = await fetch(URL);
  const body = await ordersRes.json();
  return body.data;
}