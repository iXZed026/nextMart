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

    const listStyle: string = 'link-style font-semibold'

    const links: ILinks[] = [
        {
            id: 1,
            title: 'Home',
            href: '/'
        },
    ]

    return (
        <nav>
            <ul className='flex items-center gap-12 text-md font-medium'>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            className={`px-3 py-1 transition-colors duration-200 hover:text-blue-500 ${pathname === link.href ? listStyle : 'text-gray-600'
                                }`}
                            aria-current={pathname === link.href ? "page" : undefined}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks