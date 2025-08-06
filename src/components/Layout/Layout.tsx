import React from 'react'
import { ChildrenProps } from '@/types/children'
import Navbar from '../navbar/Navbar'
import CartProvider from '@/context/CartProvider'
import Footer from '../footer/Footer'
import ViewProductProvider from '@/context/ViewProductProvider'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <CartProvider>
                <ViewProductProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ViewProductProvider>
            </CartProvider>
        </>
    )
}

export default Layout