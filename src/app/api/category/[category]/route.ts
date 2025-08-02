import { connectToDatabase } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../../model/Product";

export interface ICategoryParams {
    params: Promise<{ category: string }>
}

export async function GET(req: NextRequest, { params }: ICategoryParams) {
    const { category } = await params;

    try {
        await connectToDatabase();
        const Products = await Product.find({ category: category })
        if (Products.length > 0) {
            return NextResponse.json(Products, { status: 200 })
        }else {
            return NextResponse.json({message:"product not found"},{ status: 404 })
        }
    }
    catch (err) {
        return NextResponse.json({ message: err }, { status: 500 })
    }

}