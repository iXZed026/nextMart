import Container from '@/components/container/Container'
import Image from 'next/image'
import React from 'react'

async function Product({ params, searchParams }: any) {

    const id = await params.id;

    const result = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await result.json();

    console.log(product);

    return (
        <Container>
            <div className='grid grid-cols-12 gap-19 py-10'>
                <div className="col-span-4 flex justify-center items-center bg-white h-[350px] rounded-xl">
                    <Image
                        src={product.image}
                        width={0}
                        height={0}
                        sizes='100vw'
                        quality={65}
                        alt='product iamge'
                        priority={true}
                        style={{ width: "300px" }}
                    />
                </div>
                <div className="col-span-8 relative py-10">
                    <h2 className='text-2xl font-bold mb-5'>{product.title}</h2>
                    <h4 className='text-[var(--secound-text-color)] mb-5'>Category: <span>{product.Category}</span></h4>
                    <p className='mb-5 font-semibold'>{product.description}.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad aspernatur assumenda praesentium, quod facilis placeat sequi nemo quam ab qui unde labore! Fugiat illum labore consequuntur corporis quas nemo?</p>
                    <div className='flex items-center gap-5 absolute bottom-3'>
                        <span>${product.price}</span>
                        <button className='button'>Add To Cact</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Product