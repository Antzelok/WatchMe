"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { CartItem, Cart } from "@/types";
import { AddItemToCart, RemoveItemFromCart } from "@/lib/actions/cart.actions";
import { Plus, Minus, Loader } from "lucide-react";
import { useTransition } from "react";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
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
        className="bg-black hover:bg-orange-500 hover:text-black"
        type="button"
        variant="outline"
        onClick={handleRemoveFromCart}
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Minus className="h-4 w-4 text-white" />
        )}
      </Button>

      <span className="min-w-[24px] text-center text-white">
        {existItem.qty}
      </span>

      <Button
        className="bg-black hover:bg-orange-500 hover:text-black"
        type="button"
        variant="outline"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4 text-white" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className="flex-center w-full p-3 bg-black text-white border border-gray-700"
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
