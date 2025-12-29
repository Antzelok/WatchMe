"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { AddItemToCart } from "@/lib/actions/cart.actions";
import { toast } from "sonner";
import { useTransition } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(async () => {
      const res = await AddItemToCart({
        productId: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.images[0],
        qty: 1,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });
  };

  return (
    <Card className="w-70 text-white bg-black border-none">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
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
            <>
              <span className="font-semibold">${product.price}</span>

              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add to Cart"}
              </Button>
            </>
          ) : (
            <p className="text-destructive text-sm">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;