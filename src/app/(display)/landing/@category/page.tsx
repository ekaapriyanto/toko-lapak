"use client";
import { fetchCoverCategory } from "@/service/landingService";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Category() {
  const [coverCategory, setCoverCategory] = useState([]);

  useEffect(() => {
    fetchCoverCategory().then((data) => setCoverCategory(data.data)); //memanggil service api fetchCategory, lalu datanya di simpam ke setBanners
  }, []); //[] untuk memastika effect berjalan 1 kali(mencegah looping call api)

  return (
    <>
      <div className="inline-flex items-center justify-center w-full mt-4">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1>Category</h1>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        {coverCategory.length > 0 &&
          coverCategory.map((coverCategory: any) => (
            <Card key={coverCategory.id}>
              <CardContent
                className="flex mr-5 w-full items-center justify-center"
                key={coverCategory.id}
              >
                <Image
                  src={coverCategory.imageCategory}
                  alt="banner"
                  width={250}
                  height={200}
                />
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
