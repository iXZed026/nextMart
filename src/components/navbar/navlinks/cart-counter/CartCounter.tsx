"use client"
import React, { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import { useCartContext } from '@/context/CartProvider';
import { ICart } from '@/context/CartProvider';

function CartCounter() {
    const { cart } = useCartContext(); // Removed unused setCart
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const calculateCartCounter = cart.reduce((initial: number, item: ICart) => {
            return initial + item.count;
        }, 0);
        setCounter(calculateCartCounter);
    }, [cart]);

    return (
        <Link href='/cart' className='relative'>
            <FaCartShopping className='text-2xl' />
            <div className={`cart-counter ${counter > 0 ? '' : 'hidden'}`}>
                {counter > 9 ? '9+' : counter}
            </div>
        </Link>
    );
}

export default CartCounter;