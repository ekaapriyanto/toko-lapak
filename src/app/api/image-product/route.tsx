import { getImageProductById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageId = searchParams.get("imageId");
  if (imageId) {
    const imageProduct = await getImageProductById("ImageBatik", imageId);
    if (imageProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        images: imageProduct,
      }); //jika iya maka akan menampilkan data sesuai dengan idnya
    }
    return NextResponse.json({ status: 404, message: "Image Not Found" });
  }
}
