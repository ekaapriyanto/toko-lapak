import React, { lazy, Suspense } from "react";
import Banner from "@/app/components/Banner";
import Category from "./components/Category";
import Image from "next/image";
import NewArrival from "./components/NewArrival";
import bannerSale from "@/assets/bannerSale.png";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
