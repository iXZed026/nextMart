# 🛍️ NextMart - E-commerce App with Next.js

This is my **first Next.js project**, built as a simple e-commerce web app.

## 🚀 Overview

The home page fetches product data from a MongoDB database using API routes and displays them to the user. Users can click on a product image to view **detailed information** about that specific product.

### 🛒 Shopping Cart Features

- Add products to the cart
- View all added products
- Remove individual products
- Update product quantities
- See the total price in real-time

### 🧾 Order Functionality

When a user proceeds to **checkout** and fills out the form, the following information is saved to a **MongoDB database**:

- User details (name, address, etc.)
- Cart items
- Total price
- Order creation date

## 🛠️ Tech Stack

- **Next.js** 15
- **React** (Client & Server Components)
- **TypeScript**
- **MongoDB** (via Mongoose)
- **Tailwind CSS** for styling
- **Vercel** for deployment

## 📁 Project Structure Highlights

- `app/api/`: API routes (e.g., `/api/products`, `/api/order`)
- `components/`: UI components (Product list, Cart, etc.)
- `context/`: React context for global state (e.g., cart management)
- `model/`: Mongoose models for MongoDB collections

## 🌐 Live Demo

🔗 [Live on Vercel](https://next-mart-shop.vercel.app)

---

Feel free to clone, explore, or contribute to this project!

---

## 📩 Contact

If you have any questions or suggestions, feel free to reach out!

