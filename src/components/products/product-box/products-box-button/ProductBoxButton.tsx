"use client"
import { IProduct } from '@/app/api/products/route'
import { ICart, useCartContext } from '@/context/CartProvider'
import React from 'react'

function ProductBoxButton(props: IProduct) {

    const { cart, setCart } = useCartContext();

    function addToCartHandler() {

        const findProduct = cart.find((cart: IProduct) => cart._id === props._id);

        if (findProduct) {
            setCart((prevCart: ICart[]) => (
                prevCart.map((item) => {
                    if (item._id === findProduct._id) {
                        return { ...item, count: item.count + 1 };
                    }
                    return item
                })
            )
            )
        } else {
            setCart((prevCart: ICart[]) => {
                return [...prevCart, { ...props, count: 1 }];
            })
        }

    }

    return (
        <button onClick={addToCartHandler} className='button'>Add To Cart</button >
    )
}

export default ProductBoxButton