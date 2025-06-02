import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const colorsRes = await fetch(URL);
  const body = await colorsRes.json();
  return body.data;
}