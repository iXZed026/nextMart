import React from 'react'
import Container from '@/components/container/Container'
import CartTable from '@/components/cart-table/CartTable'
import CartForm from '@/components/cart-form/CartForm'


function Cart() {
    return (
        <div className='xl:w-[75%] sm:w-[80%] w-full mx-auto my-20'>
            <div className="w-full grid grid-cols-12 gap-7">
                <div className="cart-box xl:col-span-7 col-span-12">
                    <h2 className='mb-3 text-lg font-semibold'>Cart</h2>
                    <CartTable />
                </div>
                <div className="cart-box xl:col-span-5 col-span-12 h-[600px]">
                    <h2 className='mb-3 text-lg font-semibold'>Your information</h2>
                    <CartForm />
                </div>
            </div>
        </div>
    )
}

export default Cart