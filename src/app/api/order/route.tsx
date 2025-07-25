import { connectToDatabase } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Order from "../../../../model/Order";

export async function POST(req: NextRequest) {
    try {
        const { user, cart,totalPrice } = await req.json();
        console.log(totalPrice)
        await connectToDatabase();
        const newOrder = new Order({
            user,
            cart,
            totalPrice,
        });
        await newOrder.save();
        return NextResponse.json({ data: newOrder ,message:"Request is successfully!"},{status:200});
    } catch (err) {
        console.error("Order Save Error:", err);
        return NextResponse.json({ data: null, message: err }, { status: 500 });
    }
}