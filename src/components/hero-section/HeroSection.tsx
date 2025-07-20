import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <div>
            <div>
                <h2>Next Mart Shop</h2>
                <p>This website was built with next.js for resume by Danyal Lotfi</p>
                <button>View products</button>
            </div>
            <div>
                <Image src="/images/hero.jpeg" width={400} height={300} alt='Electronic image' />
            </div>
        </div>
    )
}

export default HeroSection