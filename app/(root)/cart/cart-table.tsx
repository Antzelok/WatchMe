"use client";

import { useTransition } from "react";
import { Cart } from "@/types";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import AddToCart from "@/components/shared/product/add-to-cart";
import ProductPrice from "@/components/shared/product/product-price";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {!cart || cart.items.length === 0 ? (
        <div className="mt-20 my-10 text-white">
          Cart Is Empty <Link href="/">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 my-30 text-white">
          <div className="overflow-x-auto md:col-span-3 m-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white text-lg font-bold">
                    Your Cart
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.items.map((item) => (
                  <TableRow key={item.slug}>
                    <TableCell>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={100}
                          width={100}
                        />
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <AddToCart cart={cart} item={item} />
                    </TableCell>
                    <TableCell className="flex-center">
                      {/* Individual Item Price */}
                      <ProductPrice
                        value={Number(item.price)}
                        className="text-lg"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Card className="bg-black text-white justify-center m-2">
            <CardContent className="p-4 gap-4">
              <div className="pb-4 text-xl">
                Subtotal ({cart.items.reduce((a, c) => a + c.qty, 0)}):
                {/* Total Price */}
                <ProductPrice
                  value={Number(cart.itemsPrice)}
                  className="font-bold"
                />
              </div>
              <Button
                className="w-full bg-orange-500 text-black"
                disabled={isPending}
                onClick={() =>
                  startTransition(() => router.push("/shipping-address"))
                }
              >
                {isPending ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}{" "}
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CartTable;
