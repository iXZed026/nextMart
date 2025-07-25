import mongoose from "mongoose";

const date = new Date();
const FullDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`

const OrderSchema = new mongoose.Schema({
    user: {
        name: String,
        email: String,
        country: String,
        city: String,
        address: String,
        postalCode: String,
    },
    cart: [{
        _id: String,
        title: String,
        description: String,
        price: Number,
        category: String,
        image: String,
        count: Number,
    }],

    totalPrice: Number,
    status: { type: String, default: "pending" },
    createAt: { type: String, default: FullDate },

})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)