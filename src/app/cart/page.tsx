import React from 'react'
import Container from '@/components/container/Container'
import CartTable from '@/components/cart-table/CartTable'


function Cart() {
    return (
        <Container>
            <div className="grid grid-cols-12 gap-7 mt-20">
                <div className="cart-box col-span-7">
                    <h2 className='mb-3 text-xl font-bold'>Cart</h2>
                    <CartTable />
                </div>
                <div className="cart-box col-span-5 h-[600px]">
                    <h2 className='mb-3 text-xl font-bold'>Your information</h2>
                </div>
            </div>
        </Container>
    )
}

export default Cart