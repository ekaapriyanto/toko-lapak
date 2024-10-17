"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchBanners } from "@/service/landingService";
import Image from "next/image";

export default function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanners().then((data) => setBanners(data.data)); //memanggil service api fetchBanner, lalu datanya di simpam ke setBanners(useState)
  }, []); //[] untuk memastika effect berjalan 1 kali(mencegah looping call api)
  console.log("banners", banners);
  return (
    <div>
      <Carousel className="w-full mt-5">
        <CarouselContent>
          {banners.length > 0 &&
            banners.map((item: any) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <CardContent className="flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt="banner"
                      width={900}
                      height={200}
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
