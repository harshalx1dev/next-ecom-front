// hooks/use-cart.ts
import { create } from "zustand";
import { Product } from "@/types";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          // just increase quantity
          set({
            items: currentItems.map((item) =>
              item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
          toast.success("Increased quantity!");
          return;
        }

        set({ items: [...get().items, { ...data, quantity: 1 }] });
        toast.success("Item added to cart");
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from the cart!");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Cart cleared!");
      },
      increaseQuantity: (id) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },
      decreaseQuantity: (id) => {
        set({
          items: get().items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
            )
            // optionally auto-remove if quantity hits 0
            .filter((item) => item.quantity > 0),
        });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
