import { formatePrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Cart = () => {
  const productItem = 1;
  const fee = 2;
  return (
    <Sheet>
      <SheetTrigger className="flex items-center group">
        <ShoppingCart
          className="w-6 h-6 flex items-center"
          aria-hidden="true"
        />
        <span className="ml-2 text-gray-400 text-sm group-hover:text-gray-600">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-center"> Cart (0) </SheetTitle>
        </SheetHeader>
        {productItem > 0 ? (
          <div className="flex w-full flex-col pr-6">
            <div className="mb-3">
              <span className="text-md">Cart items</span>
            </div>
            <Separator />
            <div className="mt-3 flex justify-between mb-2 text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="mt-3 flex justify-between mb-2 text-muted-foreground">
              <span className="flex-1">Transation Fee</span>
              <span>{formatePrice(fee)}</span>
            </div>
            <div className="mt-3 flex justify-between mb-2 text-muted-foreground">
              <span className="flex-1">Total</span>
              <span>{formatePrice(fee)}</span>
            </div>
            <SheetFooter className="mt-4">
              <SheetTrigger asChild>
                <Link
                  href="/cart"
                  className={buttonVariants({
                    className: "w-full",
                  })}
                >
                  Go to checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full space-y-1">
            <div
              className="relative mb-4 h-60 w-60 text-muted-foreground"
              aria-hidden="true"
            >
              <Image src="/hippo-empty-cart.png" alt="empty cart image" fill />
            </div>
            <div className="text-xl font-semibold">
              <span>Your cart is empty!</span>
            </div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                })}
              >
                Add products
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
