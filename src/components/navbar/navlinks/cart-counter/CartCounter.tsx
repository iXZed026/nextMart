"use client"
import React, { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useCartContext } from '@/context/CartProvider';

function CartCounter() {

    const { cart, setCart } = useCartContext();
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (cart.length > 0) {
            let calculateCartCounter = cart.reduce((initial: number, item: any) => {
                return initial + item.count
            }, 0)
            setCounter(calculateCartCounter)
        }else {
            setCounter(0)
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