import { getProduct, getProductById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    try {
      const detailProduct = await getProductById("ProductBatik", id);
      if (detailProduct) {
        return NextResponse.json({
          status: 200,
          message: "Success",
          product: detailProduct,
        }); //jika iya maka akan menampilkan data sesuai dengan idnya
      }
      return NextResponse.json({ status: 404, message: "Product not found" }); //jika ada id maka akan menampilkan data yg ada di detail product
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  } else {
    const products = await getProduct("ProductBatik");
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: products,
    }); //jika tidak maka akan menampilkan semua data yg ada di detail product
  }
}
