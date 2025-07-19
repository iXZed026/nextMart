import { ChildrenProps } from '@/types/children'
import React from 'react'

function Container({ children }: ChildrenProps) {
    return (
        <div
            className='w-[95%] xl:w-[75%] lg:w-[80%] md:w-[85%] sm:w-[90%] mx-auto'
        >
            {children}
        </div>
    )
}

export default Container