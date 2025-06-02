"use client";

import { useEffect, useState } from "react";

export const priceFormatter = new Intl.NumberFormat("en-in", {
  style: "currency",
  currency: "USD"
})

export const Currency = ({ value }: { value?: string | number }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return null;

  return (
    <span className="font-semibold">{priceFormatter.format(Number(value))}</span>
  )
}