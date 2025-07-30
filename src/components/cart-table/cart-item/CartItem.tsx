"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { FaDeleteLeft } from "react-icons/fa6";
import { ICart, useCartContext } from '@/context/CartProvider';
import { VscEmptyWindow } from "react-icons/vsc";
import Link from 'next/link';


function CartItem() {

    const { cart, setCart, totalPrice, setTotalPrice } = useCartContext();


    useEffect(() => {
        if (cart.length > 0) {
            const calulatePrice = cart.reduce((initial: number, item: ICart) => {
                return initial + (item.price * item.count)
            }, 0)
            setTotalPrice(calulatePrice)
        }
    }, [cart]);


    function increaseHandler(ID: string) {
        setCart((prevCart: ICart[]) => {
            return prevCart.map(item => {
                if (item._id === ID && item.count < 5) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
        })
    }

    function decreaseHandler(ID: string) {
        setCart((prevCart: ICart[]) => {
            return prevCart.map(item => {
                if (item._id === ID) {
                    const newCount = item.count - 1
                    if (newCount <= 0) {
                        return null
                    } else {
                        return { ...item, count: newCount }
                    }
                }
                return item
            }).filter(Boolean)
        })

    }

    function removeCartItem(ID: string) {
        setCart((prevCart: ICart[]) => {
            return prevCart.filter((item) => item._id !== ID)
        })
    }

    return (
        <>
            {cart.length > 0 ? (
                <>
                    {
                        cart.map((item: ICart, key: string) => (
                            <tr className='border-[1px] border-gray-300 h-36 sm:text-md sm:font-semibold text-sm' key={item._id}>
                                <td>
                                    <Image
                                        className='select-none'
                                        src={item.image}
                                        width={100}
                                        height={100}
                                        alt='product image'
                                    />
                                </td>
                                <td>
                                    <span>{item.title}</span>
                                </td>
                                <td>
                                    <div className='flex xl:flex-row flex-col-reverse items-center select-none gap-1'>
                                        <button
                                            onClick={() => decreaseHandler(item._id)}
                                            className='button'
                                        >
                                            -
                                        </button>
                                        <span className='px-3'>{item.count}</span>
                                        <button
                                            onClick={() => increaseHandler(item._id)}
                                            className='button'
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="sm:w-auto w-[15%] text-center">
                                    ${((item.price) * item.count).toLocaleString()}
                                </td>
                                <td>
                                    <div className='flex sm:justify-center justify-end items-center select-none'>
                                        <FaDeleteLeft
                                            className='cursor-pointer text-2xl text-red-500'
                                            onClick={() => removeCartItem(item._id)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    <tr className='border-[1px] border-gray-300 h-14 font-semibold bg-gray-300'>
                        <td className='px-3'>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="flex justify-center">${totalPrice.toLocaleString()}</div>
                        </td>
                    </tr>
                </>
            ) : (
                <tr className='h-[400px]'>
                    <td className='w-full'>
                        <div className='text-gray-600'>
                            <Link href="/" className='w-full flex flex-col justify-center items-center gap-5'>
                                <VscEmptyWindow className='md:text-5xl text-2xl' />
                                <div className='md:text-2xl text-lg'>Your Cart Is Empty.</div>
                            </Link>
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default CartItem