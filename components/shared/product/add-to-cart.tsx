"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { CartItem, Cart } from "@/types";
import { AddItemToCart, RemoveItemFromCart } from "@/lib/actions/cart.actions";
import { Plus, Minus, Loader } from "lucide-react";
import { useTransition } from "react";

const AddToCart = ({
  cart,
  item,
  className,
}: {
  cart?: Cart;
  item: CartItem;
  className?: string;
}) => {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(async () => {
      const res = await AddItemToCart(item);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });
  };

  const handleRemoveFromCart = () => {
    startTransition(async () => {
      const res = await RemoveItemFromCart(item.productId);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });
  };

  const existItem = cart?.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={handleRemoveFromCart}
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </Button>

      <span className="min-w-[24px] text-center">{existItem.qty}</span>

      <Button
        type="button"
        variant="outline"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className={`flex-center w-full p-3 ${className ?? "bg-orange-500"}`}
      type="button"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? (
        <Loader className="h-4 w-4 animate-spin" />
      ) : (
        <Plus className="h-4 w-4" />
      )}
      <span className="ml-2">Add To Cart</span>
    </Button>
  );
};

export default AddToCart;
