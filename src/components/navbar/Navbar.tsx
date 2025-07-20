import React from 'react'
import NavLinks from './navlinks/NavLinks'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'

function Navbar() {
    return (
        <header className='background text-color py-4 mb-[30px]'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className='flex justify-between items-center gap-20' id='navbar-left-side'>
                    <div>
                        <h1 className='text-2xl font-bold'>NextMarket</h1>
                    </div>
                    <NavLinks />
                </div>
                <div id='navbar-right-side'>
                    <Link href='/cart'>
                        <FaCartShopping className='text-2xl' />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar