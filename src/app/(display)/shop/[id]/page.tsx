"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getData } from "@/service/index";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DetailProductPage(props: any) {
  const { params } = props;
  const [product, setProduct] = useState<any>(null);
  const [imageProduct, setImageProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getData(
        "http://localhost:3000/api/products/?id=" + params.id
      );
      setProduct(data);
    };
    fetchProducts();
  }, [params.id]);

  useEffect(() => {
    const fetchImageProduct = async () => {
      const data = await getData(
        "http://localhost:3000/api/image-product/imageId=" + params.id
      );
      setImageProduct(data);
    };
    fetchImageProduct();
  }, []);

  console.log("imageProduct", imageProduct);
  return (
    <>
      <div className="bg-gray-100 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Carousel>
                <CarouselContent>
                  {imageProduct?.length > 0 &&
                    imageProduct.map((item: any) => (
                      <CarouselItem key={item.id}>
                        <div className="flex aspect-square items-center justify-center p-2">
                          <Image
                            src={item.image}
                            alt={`Product image ${item.id}`}
                            width={500}
                            height={500}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* <Image
                src={product?.product.cover}
                alt="cover image"
                width={500}
                height={500}
              /> */}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">
                {product?.product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product?.product.tag}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  Rp {product?.product.price}{" "}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{product?.product.desc}</p>
              <div className="flex space-x-4 mb-6">
                <Button>ADD TO CART</Button>
                <Button variant={"outline"}>WISHLIST </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Info</h3>
                <p>{product?.product.information}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
