import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        country: {
            type: String,
            required: [true, "Country is required"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
        },
        address: {
            type: String,
            required: [true, "Address is required"],
        },
        postalCode: {
            type: String,
            required: [true, "Postal code is required"],
        },
    },
    cart: [
        {
            _id: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            price: { type: Number, required: true },
            category: { type: String, required: true },
            image: { type: String, required: true },
            count: { type: Number, required: true },
        },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending", required: true },
    createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)