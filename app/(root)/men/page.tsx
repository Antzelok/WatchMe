import ProductCard from "@/components/shared/product-card";
import sampleData from "@/db/sample-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men",
};

const MenPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-centergap-5 m-3 mt-30 bg-black">
      {sampleData.products.slice(0, 6).map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default MenPage;
