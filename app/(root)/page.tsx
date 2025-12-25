import HeroSection from "@/components/home/hero-section";
import OfferCard from "@/components/home/offer-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OfferCard />
    </>
  );
};

export default HomePage;
