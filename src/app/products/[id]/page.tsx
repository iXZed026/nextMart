import Container from '@/components/container/Container'
import Image from 'next/image'
import React from 'react'

function Product() {
    return (
        <Container>
            <div className=''>
                <div className="">
                    <Image
                        className='image'
                        src="/images/1.png"
                        width={0}
                        height={0}
                        sizes='100vw'
                        quality={65}
                        alt='product iamge'
                    />
                </div>
                <div className="">
                    <h2>Iphone 15 pro max</h2>
                    <h4>Category:<span>Mobile</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi voluptas dolorum ex totam nostrum?</p>
                    <div>
                        <span>Price: ${200}</span>
                        <button className='button'>Add To Cact</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Product