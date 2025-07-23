import { connectToDatabase } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../../model/Product";

export interface IProductRouteParams {
    params: { id: string }
}

export async function GET(req: NextRequest, { params }: IProductRouteParams) {

    const id = await params.id;
    try {
        await connectToDatabase();
        const product = await Product.findOne({ _id: id })
        return NextResponse.json(product, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({ message: err }, { status: 500 })
    }

}