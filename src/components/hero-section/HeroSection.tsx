import React from 'react'
import Container from '../container/Container'

function HeroSection() {
    return (
        <div className='bg-white'>
            <Container>
                <div className='py-[90px] flex flex-col md:flex-row justify-between items-center md:gap-0 gap-15'>
                    <div>
                        <h1 className='mb-8 text-3xl font-bold'>Next Mart Shop</h1>
                        <p
                            className='mb-10 text-md text-[var(--secound-text-colort)] lg:w-4/5 sm:w-full'
                        >
                            This website was built with Next.js, React, and TypeScript.
                            Designed to showcase my skills in modern web development.
                        </p>
                        <button
                            className='button'
                        >
                            View products

                        </button>
                    </div>
                    <div>
                        <div className='flex md:justify-end items-center'>
                            <img
                                className='rounded-lg lg:w-[65%] md:w-[80%] w-full'
                                src="/images/hero.jpeg"
                                alt='Electronic image'
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection