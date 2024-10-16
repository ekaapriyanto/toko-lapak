import { getBanners } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function GET() {  
  const Banners = await getBanners("banners"); //memanggil fungsi getBanners dengan parameter "banners"
  return NextResponse.json({ status: 200, message: "Success", data: Banners  });
}
