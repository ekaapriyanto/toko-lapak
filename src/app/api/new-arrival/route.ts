import { NextResponse } from "next/server"
import {getNewArrival} from "@/lib/firebase/service"

export async function GET() {
    const products = await getNewArrival("ProductBatik")
    return NextResponse.json({ status: 200, message: "Success", data: products })
}