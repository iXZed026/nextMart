import React from 'react'
import { ChildrenProps } from '@/types/children'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            {children}
        </>
    )
}

export default Layout