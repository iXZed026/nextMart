import React from 'react'
import Container from '../container/Container'

function HeroSection() {
    return (
        <div className='bg-white'>
            <Container>
                <div className='h-[450px] flex justify-between items-center'>
                    <div>
                        <h1 className='mb-8 text-3xl font-bold'>Next Mart Shop</h1>
                        <p
                            className='mb-10 text-md text-[var(--secound-text-colort)] w-full lg:w-2/3'
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
                        <div className='w-[450px] h-[300px]'>
                            <img
                                className='rounded-lg'
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