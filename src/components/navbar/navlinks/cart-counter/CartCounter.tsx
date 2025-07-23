import React from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'

function CartCounter() {
    return (
        <Link href='/cart' className='relative'>
            <FaCartShopping className='text-2xl' />
            <div
                className='cart-counter'>2</div>
        </Link>
    )
}

export default CartCounter