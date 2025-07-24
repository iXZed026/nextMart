"use client"
import React, { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useCartContext } from '@/context/CartProvider';

function CartCounter() {

    const { cart, setCart } = useCartContext();
    const [counter, setCounter] = useState(0)

    const numbers = [1, 2, 3, 4, 5, 6]

    useEffect(() => {
        if (cart.length > 0) {
            let calculateCartCounter = cart.reduce((initial: number, item: any) => {
                return initial + item.count
            }, 0)
            setCounter(calculateCartCounter)
        }
    }, [cart])

    return (
        <Link href='/cart' className='relative'>
            <FaCartShopping className='text-2xl' />
            <div className={`cart-counter ${counter > 0 ? '' : 'hidden'}`}>{counter}</div>
        </Link>
    )
}

export default CartCounter