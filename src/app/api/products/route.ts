import { connectToDatabase } from "@/app/lib/mongodb";
import Product from "../../../../model/Product";
import { NextResponse } from "next/server";

export interface IProduct {
    _id: string,
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
}

export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find({}) as IProduct[];
        return NextResponse.json(products, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({ status: 500, message: err })
    }
}
