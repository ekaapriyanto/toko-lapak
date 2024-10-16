import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between mt-4">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1>Keunggulan Kami</h1>
        </div>
      </div>
      <div className="flex h-40 items-center space-x-4 justify-center mt-14">
        <div className="text-center">
          <h1 className="font-bold">Gratis Desain</h1>
          <br />
          <p>
            Kami menyediakan jasa design dengan gratis dengan minimal pembelian.
          </p>
        </div>

        <Separator orientation="vertical" />
        <div className="text-center">
          <h1 className="font-bold">Diskon Khusus</h1>
          <br />
          <p>
            Anda akan mendapatkan harga khusus seragaman dengan diskon yang
            menarik.
          </p>
        </div>
        <Separator orientation="vertical" />
        <div className="text-center">
          <h1 className="font-bold">Kualitas Premium</h1>
          <br />
          <p>
            Kami akan memastikan bahwa semua produk yang kami buat tanpa cacat
            produksi dan telah melalui proses quality control yang ketat.
          </p>
        </div>
        <Separator orientation="vertical" />
        <div className="text-center">
          <h1 className="font-bold">MOQ Rendah</h1>
          <br />
          <p>
            Hanya dengan minimal pembelian 20 pcs, Anda bisa mendapatkan semua
            keuntungan ini.
          </p>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full mt-4">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <h1>Klien Kami</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-center mt-4">
        <Image
          src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_1.webp"
          alt="logo klien"
          width={200}
          height={200}
        />
        <Image
          src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_2.webp"
          alt="logo klien"
          width={200}
          height={200}
        />
        <Image
          src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_3.webp"
          alt="logo klien"
          width={200}
          height={200}
        />
        <Image
          src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_5.webp"
          alt="logo klien"
          width={200}
          height={200}
        />
        <Image
          src="https://riantybatik.co.id/wp-content/uploads/2023/07/px-Featured-Brand_4.webp"
          alt="logo klien"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
