import Link from 'next/link'
import React from 'react'

function NavLinks() {
    return (
        <nav>
            <ul className='flex items-center gap-8 text-md font-medium'>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        Shop
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavLinks