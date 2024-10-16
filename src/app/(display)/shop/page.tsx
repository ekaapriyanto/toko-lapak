"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchProducts } from "@/service/productService";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function formatRupiah(number: any) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data.data)); //memanggil service api fetchProducts, lalu datanya di simpam ke setBanners(useState)
  }, []); //[] untuk memastika effect berjalan 1 kali(mencegah looping call api)//[] untuk memastika effect berjalan 1 kali(mencegah looping call api)
  return (
    <div>
      <div className="flex mt-28">
        <div className="ml-5 z-10 h-screen w-72 bg-light">
          <Card>
            <CardContent>
              <div className="col-lg-3 col-md-4">
                <h5 className="title-menu ml-3">FILTERS</h5>
                <div className="px-3">
                  <Input placeholder="search" />
                  <Button className="mt-2">Search</Button>
                </div>
                <div className="px-3">
                  <h5 className="sf-title mb-3">CATEGORIES</h5>
                  <hr />
                  <div className="mt-2">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="Man">Man</SelectItem>
                          <SelectItem value="Women">Women</SelectItem>
                          <SelectItem value="kids">Kids</SelectItem>
                          <SelectItem value="couple">Couple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="sf-box mt-3">
                  <h5 className="sf-title px-3">PRICE RANGE</h5>
                  <hr />
                  <div className="mt-2 flex">
                    <Input className="mr-2" placeholder="Min Price" />
                    <Input placeholder="Max Price" />
                  </div>
                  <Button className="mt-2">Process</Button>
                </div>
                <div className="sf-box mt-3">
                  <h5 className="sf-title px-3">Sorting</h5>
                  <hr />
                  <div className="mt-2 input-group">
                    <div className="mt-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sort By Name" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Sort By Name</SelectLabel>
                            <SelectItem value="asc">Asc</SelectItem>
                            <SelectItem value="desc">Desc</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="mt-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sort By Price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Sort By Price</SelectLabel>
                            <SelectItem value="Asc">lowest</SelectItem>
                            <SelectItem value="desc">highest</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-4">
          {products.length > 0 &&
            products.map((products: any) => (
              <Link href={`/shop/${products.id}`}>
                <Card key={products.id}>
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
                        <br />
                        {products.tag === "1" ? "Couple" : " "}
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
                      ></p>
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
                      <p>
                        {products.tag},{" "}
                        {products.couple === "1" ? "Couple" : ""}
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
            ))}
        </div>
      </div>

      <div className="py-5 items-center justify-center flex">
        {/* <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
}
