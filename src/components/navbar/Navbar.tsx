import React from 'react'
import NavLinks from './navlinks/NavLinks'
import CartCounter from './navlinks/cart-counter/CartCounter'

function Navbar() {
    return (
        <header className='background text-color py-4'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className='flex justify-between items-center gap-14' id='navbar-left-side'>
                    <div>
                        <h1 className='text-2xl font-bold'>NextMarket</h1>
                    </div>
                    <NavLinks />
                </div>
                <div id='navbar-right-side'>
                    <CartCounter />
                </div>
            </div>
        </header>
    )
}

export default Navbar