import HeroSection from "@/components/home/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default HomePage;
