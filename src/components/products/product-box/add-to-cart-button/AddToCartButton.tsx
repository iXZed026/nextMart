"use client"
import { IProduct } from '@/app/api/products/route'
import { ICart, useCartContext } from '@/context/CartProvider'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function AddToCartButton(props: IProduct) {

    const { cart, setCart } = useCartContext();
    const router = useRouter();
    const pathname = usePathname()



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

        if (pathname !== "/") {
            return router.push("/")
        }

    }

    return (
        <button onClick={addToCartHandler} className='button'>Add To Cart</button >
    )
}

export default AddToCartButton;