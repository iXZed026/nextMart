import React from 'react'
import CartItem from './cart-item/CartItem';


function CartTable() {
    return (
        <table className='w-full'>
            <thead className='text-left bg-gray-200'>
                <tr className='h-12'>
                    <th className='px-3'>Product</th>
                    <th>title</th>
                    <th>Number</th>
                    <th>Price</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <CartItem />
            </tbody>
        </table>
    )
}

export default CartTable