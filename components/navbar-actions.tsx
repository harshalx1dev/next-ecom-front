"use client";

import { Package, ShoppingBag } from "lucide-react";
import { CustomButton } from "./ui/custom-button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { items } = useCart();
  const navRouter = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <CustomButton onClick={() => navRouter.push(`/cart`)} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </CustomButton>
      <CustomButton onClick={() => navRouter.push(`/orders`)} className="flex items-center rounded-full bg-black px-4 py-2">
        <Package size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          Orders
        </span>
      </CustomButton>
    </div>
  );
};
