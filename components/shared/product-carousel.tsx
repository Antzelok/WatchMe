"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel
      className="mb-12 flex items-center justify-center w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: false,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.name}>
            <Link href={`/product/${product.slug}`}>
              <div className="relative mx-auto">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width="768"
                  height="768"
                  className="object-fit"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <h2 className="bg-gray-900 bg-opacity-50 text-2xl font-bold px-2 text-white">
                    {product.name}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
