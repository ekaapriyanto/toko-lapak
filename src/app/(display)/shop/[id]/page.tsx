"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getData } from "@/service/index";
import Image from "next/image";
import { useEffect, useState } from "react";

function formatRupiah(number: any) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export default function DetailProductPage(props: any) {
  const { params } = props;
  const [product, setProduct] = useState<any>(null);
  const [imageProduct, setImageProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const getQuantity = (size: string) => {
    switch (size) {
      case "s":
        return product?.product.qtyS;
      case "m":
        return product?.product.qtyM;
      case "l":
        return product?.product.qtyL;
      case "xl":
        return product?.product.qtyXl;
      default:
        return 0;
    }
  };

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
      const image = await getData(
        "http://localhost:3000/api/image-product/?imageId=" + params.id
      );
      setImageProduct(image.images);
    };
    fetchImageProduct();
  }, [params.imageId]);

  return (
    <>
      <div className="mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Carousel>
                <CarouselContent>
                  {imageProduct?.length > 0 &&
                    imageProduct?.map((imageProduct: any) => (
                      <CarouselItem key={imageProduct?.id}>
                        <div className="flex aspect-square items-center justify-center p-2">
                          <Image
                            src={imageProduct?.image}
                            alt={`Product image ${imageProduct?.id}`}
                            width={500}
                            height={500}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-5" />
                <CarouselNext className="mr-10" />
              </Carousel>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">
                {product?.product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product?.product.tag}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  {formatRupiah(product?.product.price)}{" "}
                </span>
              </div>
              <Select onValueChange={(value) => setSelectedSize(value)}>
                <SelectTrigger className="w-1/3">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Size</SelectLabel>
                    <SelectItem value="s">Small</SelectItem>
                    <SelectItem value="m">Medium</SelectItem>
                    <SelectItem value="l">Large</SelectItem>
                    <SelectItem value="xl">Xtra Large</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {selectedSize && (
                <p className="mt-5">Qty : {getQuantity(selectedSize)}</p>
              )}

              <div className="flex space-x-4 mt-5 mb-6">
                <Button>ADD TO CART</Button>
                <Button variant={"outline"}>WISHLIST </Button>
              </div>
              <p className="text-gray-700 mb-6">{product?.product.desc}</p>
            </div>
            <div>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="rate">Rate</TabsTrigger>
                </TabsList>
                <TabsContent value="info">
                  <Card>
                    <CardHeader>
                      <CardTitle>Information</CardTitle>
                      <CardDescription>
                        {product?.product.information}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
                <TabsContent value="rate">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rate</CardTitle>
                      <CardDescription>
                        {product?.product.information}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
