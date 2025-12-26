import HeroSection from "@/components/home/hero-section";
import OfferCard from "@/components/home/offer-card";
import ProductCarousel from "@/components/shared/product-carousel";
import sampleData from "@/db/sample-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OfferCard />
      
        <ProductCarousel data={sampleData.products.slice(0, 5)} />
     
      
    </>
  );
};

export default HomePage;
