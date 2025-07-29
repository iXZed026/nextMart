import React from 'react'
import Container from '../container/Container'

function Footer() {
    return (
        <footer className='bg-[var(--main-color)] py-20'>
            <Container>
                <div className="grid grid-cols-12 text-gray-200 text-lg gap-15">
                    <div className="xl:col-span-4 md:col-span-6 col-span-12">
                        <h2 className='text-xl decoration-2 font-bold mb-7'>Customer Service</h2>
                        <ul>
                            <li className='mb-3 cursor-pointer'>Contact Us</li>
                            <li className='mb-3 cursor-pointer'>FAQs</li>
                            <li className='mb-3 cursor-pointer'>Shipping & Delivery</li>
                            <li className='mb-3 cursor-pointer'>Returns & Exchanges </li>
                            <li className='mb-3 cursor-pointer'>Track Order</li>
                        </ul>
                    </div>
                    <div className="xl:col-span-4 md:col-span-6 col-span-12">
                        <h2 className='text-xl decoration-2 font-bold mb-7'>Our Store</h2>
                        <ul>
                            <li className='mb-3 cursor-pointer'>About Us</li>
                            <li className='mb-3 cursor-pointer'>Store Locator</li>
                            <li className='mb-3 cursor-pointer'>Careers</li>
                            <li className='mb-3 cursor-pointer'>Blog</li>
                            <li className='mb-3 cursor-pointer'>Affiliate Program</li>
                        </ul>
                    </div>
                    <div className="xl:col-span-4 md:col-span-6 col-span-12">
                        <h2 className='text-xl decoration-2 font-bold mb-7'>Follow Us</h2>
                        <ul>
                            <li className='mb-3 cursor-pointer'>Facebook</li>
                            <li className='mb-3 cursor-pointer'>Instagram</li>
                            <li className='mb-3 cursor-pointer'>Twitter</li>
                            <li className='mb-3 cursor-pointer'>YouTube</li>
                            <li className='mb-3 cursor-pointer'>TikTok</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer