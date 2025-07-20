import React from 'react'
import { ChildrenProps } from '@/types/children'
import Navbar from '../navbar/Navbar'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout