"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface ILinks {
    id: number,
    title: string,
    href: string,
}

function NavLinks() {

    const pathname = usePathname();

    const listStyle: string = 'text-gray-800 text-lg font-bold'

    const links: ILinks[] = [
        {
            id: 1,
            title: 'Home',
            href: '/'
        },
        {
            id: 2,
            title: 'Shop',
            href: '/shop'
        },
    ]

    return (
        <nav>
            <ul className='flex items-center gap-8 text-md font-medium'>
                {
                    links.map((link, key) => (
                        <li key={link.id} className={pathname === link.href ? listStyle : ''}>
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks