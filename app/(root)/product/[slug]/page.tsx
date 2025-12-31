"use server";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getMyCart } from "@/lib/actions/cart.actions";
import AddToCart from "@/components/shared/product/add-to-cart";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const cart = await getMyCart();

  return (
    <section className="bg-black text-white mt-30 mx-10 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Product Images */}
        <div className="col-span-2 flex flex-col gap-4">
          <Image
            src={product.images?.[0] || "/images/placeholder.png"}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover border border-gray-700"
          />
        </div>

        {/* Product Details */}
        <div className="col-span-2 flex flex-col gap-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wide">
            {product.brand} • {product.category}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>

          <p className="text-gray-300">{product.description}</p>

          <div className="flex items-center gap-4 mt-6">
            <Badge
              variant={product.stock > 0 ? "outline" : "destructive"}
              className={
                product.stock > 0 ? "border-orange-500 text-orange-400" : ""
              }
            >
              {product.stock > 0 ? "In Stock" : "Out Of Stock"}
            </Badge>

            <span className="text-2xl font-bold text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Add To Cart logic */}
          {product.stock > 0 && (
            <AddToCart
              cart={cart}
              item={{
                productId: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                qty: 1,
                image: product.images![0],
              }}
            />
          )}
        </div>

        {/* Action Card */}
        <div className="col-span-1 hidden md:block">
          <Card className="bg-black border border-gray-700">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Price</span>
                <span className="text-white font-semibold">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                {product.stock > 0 ? (
                  <Badge
                    variant="outline"
                    className="border-orange-500 text-orange-400"
                  >
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out Of Stock</Badge>
                )}
              </div>

              {/* Same Add To Cart logic */}
              {product.stock > 0 && (
                <AddToCart
                  cart={cart}
                  item={{
                    productId: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    qty: 1,
                    image: product.images![0],
                  }}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
