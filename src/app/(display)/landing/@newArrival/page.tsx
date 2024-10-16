"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetchNewArrival } from "@/service/landingService";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function formatRupiah(number: any) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export default function NewArrival() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchNewArrival().then((data) => setProducts(data.data)); //memanggil service api fetchProducts, lalu datanya di simpam ke setBanners(useState)
  }, []); //[] untuk memastika effect berjalan 1 kali(mencegah looping call api)

  return (
    <div>
      <>
        <div className="inline-flex items-center justify-center w-full mt-4">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <h1>New Arrival</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-5">
          {products.length > 0 &&
            products.map(
              (
                products: any //hanya mengambil 4 dari yang paling terbaru
              ) => (
                <div key={products.id}>
                  <Link href={`/shop/${products.id}`}>
                    <Card>
                      <CardContent>
                        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                          <Image
                            src={products.cover}
                            className="rounded-t-lg object-cover"
                            alt="Product Image"
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="p-6">
                          <p
                            className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
                            style={{
                              whiteSpace: "nowrap",
                              width: 200,
                              overflow: "hidden",
                              textOverflow: "clip",
                            }}
                          >
                            {products.name}
                          </p>
                          <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
                            {formatRupiah(products.price)}
                          </p>
                          <p
                            className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
                            style={{
                              whiteSpace: "nowrap",
                              width: 200,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Stock : {products.qty}
                          </p>
                          <p
                            className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
                            style={{
                              whiteSpace: "nowrap",
                              width: 200,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {products.desc}
                          </p>
                        </div>
                        <div className="p-6 pt-0 mb-5">
                          <Button className="block w-full" type="button">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              )
            )}
        </div>
      </>
    </div>
  );
}
