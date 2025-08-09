"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu } from "lucide-react";

interface MobileNavbarProps {
  data: Category[]
}

const MobileNavbar = ({ data }: MobileNavbarProps) => {
  const pathname = usePathname();
  const routes = data?.map(route => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }))

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Menu className="text-[32px] text-black cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col border-none w-full">
        <div className="my-8 text-center text-2xl">
          <Link href="/">
            <div className="text-4xl font-semibold">HMX1</div>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {routes.map((link, index) => (
            <Link href={link.href} key={index} className={cn('text-xl capitalize text-neutral-500', link.active && 'text-black')}>{link.label}</Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar;