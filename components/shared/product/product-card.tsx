"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product, Cart } from "@/types";
import AddToCart from "@/components/shared/product/add-to-cart";

const ProductCard = ({ product, cart }: { product: Product; cart?: Cart }) => {
  return (
    <Card className="w-70 text-white bg-black border-none">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0] || "/images/placeholder.png"}
            alt={product.name}
            height={300}
            width={300}
            priority
            className="object-cover rounded"
          />
        </Link>
      </CardHeader>

      <CardContent className="p-2 grid gap-4">
        <div className="text-sm">{product.brand}</div>

        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>

        <div className="flex items-center justify-between gap-4">
          {product.stock > 0 ? (
            <AddToCart
              cart={cart}
              item={{
                productId: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                qty: 1,
                image: product.images[0],
              }}
              className="bg-black text-white border border-gray-700"
            />
          ) : (
            <p className="text-destructive text-sm">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
