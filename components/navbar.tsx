import Link from "next/link";
import { Container } from "./ui/container";
import { MainNav } from "./main-nav";
import { getCategories } from "@/actions/get-categories";
import { NavbarActions } from "./navbar-actions";
import MobileNavbar from "@/components/mobile-navbar";

export const revalidate = 0;

export const Navbar = async () => {
  const categoriesData = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex gap-x-2">
            <p className="font-bold text-xl">HMX1</p>
          </Link>
          <div className="hidden lg:block">
            <MainNav data={categoriesData} />
          </div>
          <NavbarActions />
          <div className="block lg:hidden ml-4">
            <MobileNavbar data={categoriesData} />
          </div>
        </div>
      </Container>
    </div>
  );
};
