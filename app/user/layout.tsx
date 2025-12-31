import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import MainNav from "@/app/user/main-nav";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col bg-black text-white h-screen w-full">
        <div className="border-b w-full mx-auto">
          <div className="flex items-center h-16 px-4">
            <Link href="/" className="w-22">
              <Image
                src="/public/images/logo.svg"
                height={48}
                width={48}
                alt={APP_NAME}
              />
            </Link>
            <MainNav />
            <div className="ml-auto items-center flex space-x-4"></div>
          </div>
        </div>

        <div className="flex-1 space-y-4 p-4 w-full mx-auto">{children}</div>
      </div>
    </>
  );
}
