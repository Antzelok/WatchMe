"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselImages = [
  "/carousel/watchcarousel1.png",
  "/carousel/watchcarousel2.png",
];

const ProductCarousel = () => {
  return (
    <Carousel
      className="m-10"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: false,
        }),
      ]}
    >
      <CarouselContent>
        {carouselImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={1000}
                height={400}
                className="rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductCarousel;
