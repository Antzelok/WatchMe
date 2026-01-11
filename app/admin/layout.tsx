import { Toaster } from "react-hot-toast";
import Link from "next/link";
import MainNav from "@/app/admin/main-nav";
import { House } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col">
        <Toaster position="bottom-right" />
        <div className="border-b w-full mx-auto">
          <div className="flex items-center h-16 px-4">
            <Link href="/" className="w-22">
              <House size={50} color="#ec6104" />
            </Link>
            <MainNav className="mx-6" />
            <div className="ml-auto items-center flex space-x-4"></div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 w-full mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
