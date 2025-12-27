import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="px-6 py-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {/* BRAND */}
        <div className="space-y-4">
          <Link href="/">
            <h1 className="text-3xl font-bold tracking-wider">
              WATCH <span className="text-orange-500">ME</span>
            </h1>
          </Link>
          <p className="text-white/70 text-sm max-w-xs">
            Luxury timepieces. Minimal design. Made for those who demand
            elegance and quality.
          </p>

          <div className="flex gap-4 mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-orange-500 text-white"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-orange-500 text-white"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-orange-500 text-white"
            >
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* SHOP LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
            Shop
          </h3>
          <ul className="space-y-3 text-white/70">
            <li>
              <Link
                href="/men"
                className="hover:text-orange-500 transition-colors"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                href="/women"
                className="hover:text-orange-500 transition-colors"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="hover:text-orange-500 transition-colors"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-white/70">
            <li>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
            Subscribe
          </h3>
          <p className="text-white/70 text-sm">
            Get exclusive updates and offers.
          </p>
          <form className="flex w-full gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white/10 text-white placeholder-white/50"
            />
            <Button
              type="submit"
              className="bg-orange-500 text-black hover:bg-orange-600"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-12 py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} WATCHME. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
