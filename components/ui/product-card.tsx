"use client";

import { Product } from "@/types";
import Image from "next/image";
import { IconButton } from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navRouter = useRouter();
  const handleClick = () => navRouter.push(`/products/${product?.id}`)
  const { onOpen } = usePreviewModal();
  const { addItem } = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onOpen(product);
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addItem(product);
  }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image className="aspect-square object-cover object-center rounded-md" alt="Product Snapshot" src={product?.images?.[0]?.url} fill />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600" />} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  )
}