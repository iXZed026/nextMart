import React from 'react'
import { ChildrenProps } from '@/types/children'
import Navbar from '../navbar/Navbar'
import Container from '../container/Container'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout