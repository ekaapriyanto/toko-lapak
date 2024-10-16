import { getCatImage } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const coverCategory = (await getCatImage("category"));
  return NextResponse.json({ staus: 200, message: "Success", data: coverCategory})
}
