"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTransition } from "react";
import { AddItemToCart, RemoveItemFromCart } from "@/lib/actions/cart.actions";
import { ArrowRight, Loader, Minus, Plus } from "lucide-react";
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
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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
                    <TableCell className="flex-center gap-2">
                      <Button
                        className="m-2 hover:bg-orange-500"
                        disabled={isPending}
                        variant="ghost"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await RemoveItemFromCart(
                              item.productId
                            );

                            if (!res.success) {
                              toast.error(res.message);
                            } else {
                              toast.success(res.message);
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <Minus className="w-5 h-5" />
                        )}
                      </Button>
                      <span>{item.qty}</span>
                      <Button
                        className="m-5 hover:bg-orange-500"
                        disabled={isPending}
                        variant="ghost"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await AddItemToCart(item);

                            if (!res.success) {
                              toast.error(res.message);
                            } else {
                              toast.success(res.message);
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Card className="bg-black text-white justify-center m-2">
            <CardContent className="p-4 gap-4">
              <div className="pb-4 text-xl">
                Subtotal {cart.items.reduce((a, c) => a + c.qty, 0)}):
                <span className="span font-bold">
                  {formatCurrency(cart.itemsPrice)}
                </span>
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
