"use client"
import { ChildrenProps } from '@/types/children'
import React, { createContext, useContext, useEffect, useState } from 'react'

export interface ICart {
    _id: string,
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
    count: number
}

const CartContext = createContext({} as any)

export function useCartContext() {
    return useContext(CartContext)
}

function CartProvider({ children }: ChildrenProps) {

    const [cart, setCart] = useState<[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider