import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white border-none">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
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
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition-colors text-white"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition-colors text-white"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition-colors text-white"
            >
              <Facebook className="h-5 w-5" />
            </Link>
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
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-white/10 mt-12 py-6 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} WATCHME. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
