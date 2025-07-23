import React from 'react'
import { ChildrenProps } from '@/types/children'
import Navbar from '../navbar/Navbar'
import CartProvider from '@/context/CartProvider'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <CartProvider>
                <Navbar />
                {children}
            </CartProvider>
        </>
    )
}

export default Layout