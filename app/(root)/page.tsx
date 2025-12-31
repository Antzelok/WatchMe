import HeroSection from "@/components/home/hero-section";
import OfferCard from "@/components/home/offer-card";
import WatchBrands from "@/components/home/watch-brands";
import ProductCarousel from "@/components/shared/product/product-carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OfferCard />

      <ProductCarousel />
      <WatchBrands />
    </>
  );
};

export default HomePage;
