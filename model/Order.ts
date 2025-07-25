import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    users: {
        name: String,
        email: String,
        country: String,
        city: String,
        address: String,
        postalCode: Number,
    },
    cart: {
        _id: String,
        title: String,
        description: String,
        price: Number,
        category: String,
        image: String,
        count: Number,
    },
    totalprice: Number,
    status: { type: String, default: "pending" },
    createAt: { type: String, default: Date.now }

})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)