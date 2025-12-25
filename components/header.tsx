import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b text-white bg-black/40 backdrop-blur-lg ">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT MENU*/}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-lg hover:underline">
              MEN
            </a>
            <a href="#" className="text-lg hover:underline">
              WOMEN
            </a>
            <a href="#" className="text-lg hover:underline">
              LATEST
            </a>
          </nav>

          {/* Logo */}
          <h1 className="text-3xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2">
            WATCHME
          </h1>

          {/* RIGHT MENU */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-lg font-medium hover:underline">
              ABOUT
            </a>
            <a href="#" className="text-lg font-medium hover:underline">
              CONTACT
            </a>
            <a href="#" className="text-lg font-medium hover:underline">
              ACCOUNT
            </a>
          </nav>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-6">
                  <a href="#" className="text-sm font-medium">
                    MEN
                  </a>
                  <a href="#" className="text-lg font-medium">
                    WOMEN
                  </a>
                  <a href="#" className="text-lg font-medium">
                    LATEST
                  </a>
                  <a href="#" className="text-lg font-medium">
                    ABOUT
                  </a>
                  <a href="#" className="text-lg font-medium">
                    CONTACT
                  </a>
                  <a href="#" className="text-lg font-medium">
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
