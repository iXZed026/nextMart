import React from 'react'
import { ChildrenProps } from '@/types/children'
import Navbar from '../navbar/Navbar'
import CartProvider from '@/context/CartProvider'
import Footer from '../footer/Footer'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <CartProvider>
                <Navbar />
                {children}
                <Footer />
            </CartProvider>
        </>
    )
}

export default Layout