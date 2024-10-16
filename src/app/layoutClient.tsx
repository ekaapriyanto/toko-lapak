"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import { SessionProvider } from "next-auth/react"; //digunakan untuk mengambil data user
export default function LayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
}
