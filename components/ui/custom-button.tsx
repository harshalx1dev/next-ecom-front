import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps> (({
  className, children, type = "button", ...props
}, ref) => {
  return (
    <button ref={ref} className={cn(`w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition cursor-pointer`, className)} {...props} type={type}>
      {children}
    </button>
  )
})

CustomButton.displayName = "Button";