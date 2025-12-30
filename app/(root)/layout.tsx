import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Toaster position="bottom-right" />
      <Header />
      <main className="flex-1 wrapper bg-black">{children}</main>
      <Footer />
    </div>
  );
}
