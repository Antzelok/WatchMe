import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left menu (desktop) */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:underline">
              Men
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Women
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Latest
            </a>
          </nav>

          {/* Logo */}
          <h1 className="text-xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2">
            WATCHME
          </h1>

          {/* Right menu (desktop) */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium hover:underline">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Contact
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Account
            </a>
          </nav>

          {/* Mobile menu */}
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
                    Men
                  </a>
                  <a href="#" className="text-sm font-medium">
                    Women
                  </a>
                  <a href="#" className="text-sm font-medium">
                    Latest
                  </a>
                  <a href="#" className="text-sm font-medium">
                    About
                  </a>
                  <a href="#" className="text-sm font-medium">
                    Contact
                  </a>
                  <a href="#" className="text-sm font-medium">
                    Account
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
