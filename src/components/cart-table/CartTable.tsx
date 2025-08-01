"use client"
import React from 'react'
import CartItem from './cart-item/CartItem';
import { useCartContext } from '@/context/CartProvider';


function CartTable() {

    const { cart } = useCartContext();

    return (
        <table className='w-full'>
            <thead className='text-center sm:text-left text-gray-100  bg-[var(--main-color)]'>
                <tr className='h-12'>
                    {
                        cart.length > 0 ? (
                            <>
                                <th className='px-3'>Product</th>
                                <th>title</th>
                                <th>Number</th>
                                <th>Price</th>
                                <th>Options</th>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                <CartItem />
            </tbody>
        </table>
    )
}

export default CartTable