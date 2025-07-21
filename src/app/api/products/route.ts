import { connectToDatabase } from "@/app/lib/mongodb";
import Product from "../../../../model/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find({})
        return NextResponse.json(products, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({ status: 500, message: err })
    }
}