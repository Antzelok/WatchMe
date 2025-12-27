import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full z-50 h-20 text-white bg-black/10 backdrop-blur-lg">
      <div className="p-2 mx-2">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT MENU*/}
          <nav className="hidden md:flex gap-6">
            <Link href="/men" className="text-lg hover:text-orange-500">
              MEN
            </Link>
            <Link href="/women" className="text-lg hover:text-orange-500">
              WOMEN
            </Link>
            <a href="#" className="text-lg hover:text-orange-500">
              LATEST
            </a>
          </nav>

          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-bold">
              WATCH <span className="text-orange-500">ME</span>
            </h1>
          </Link>
          {/* RIGHT MENU */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/cart"
              className="text-lg font-medium hover:text-orange-500"
            >
              CART
            </Link>
            <a href="#" className="text-lg font-medium hover:text-orange-500">
              CONTACT
            </a>
            <a href="#" className="text-lg font-medium hover:text-orange-500">
              ACCOUNT
            </a>
          </nav>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-orange-500 hover:bg-black"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                className="bg-black/50 backdrop-blur-lg text-white"
                side="right"
              >
                <nav className="flex flex-col gap-4 m-5">
                  <Link
                    href="/men"
                    className="text-lg font-medium hover:text-orange-500"
                  >
                    MEN
                  </Link>
                  <Link
                    href="/women"
                    className="text-lg font-medium hover:text-orange-500"
                  >
                    WOMEN
                  </Link>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-orange-500"
                  >
                    LATEST
                  </a>
                  <Link
                    href="/cart"
                    className="text-lg font-medium hover:text-orange-500"
                  >
                    CART
                  </Link>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-orange-500"
                  >
                    CONTACT
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-orange-500"
                  >
                    ACCOUNT
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
