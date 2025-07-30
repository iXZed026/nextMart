"use client"
import { ChildrenProps } from '@/types/children'
import React, { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react'

export interface ICart {
    _id: string,
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
    count: number
}

interface ICartContext {
    cart: ICart[],
    setCart: Dispatch<SetStateAction<ICart[]>>,
    totalPrice: number,
    setTotalPrice: Dispatch<SetStateAction<number>>
}

const CartContext = createContext<ICartContext>({
    cart: [],
    setCart: () => {},
    totalPrice: 0,
    setTotalPrice: () => {}
})

export function useCartContext() {
    return useContext(CartContext)
}

function CartProvider({ children }: ChildrenProps) {
    const [cart, setCart] = useState<ICart[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider