import { Metadata } from "next";
import { getAllProducts } from "@/lib/actions/product.actions";
import ProductCard from "@/components/shared/product/product-card";

export const metadata: Metadata = {
  title: "Men",
};

const MenPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 m-3 mt-30 bg-black">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MenPage;
