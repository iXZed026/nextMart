import { IProductRouteParams } from '@/app/api/products/[id]/route';
import Container from '@/components/container/Container'
import ProductBoxButton from '@/components/products/product-box/add-to-cart-button/AddToCartButton';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

async function Product({ params }: IProductRouteParams) {

    const { id } = await params;

    const result = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await result.json();


    return (
        <Container>
            <div className='grid grid-cols-12 gap-5  py-10 max-w-full'>
                <div className=" xl:col-span-4 col-span-12 flex justify-center py-10 items-center bg-white rounded-xl">
                    <Image
                        src={product.image}
                        width={300}
                        height={300}
                        sizes='100vw'
                        quality={60}
                        alt='product image'
                        priority={true}
                    />
                </div>
                <div className="xl:col-span-8 col-span-12 relative py-10">
                    <h2 className='text-2xl font-bold mb-5'>{product.title}</h2>
                    <h4 className='text-[var(--secound-text-color)] mb-5'>
                        <Link href={`/category/${product.category}`}>
                            <span className='font-bold text-[var(--main-color)]'>{product.category}</span></Link>
                    </h4>
                    <p className='mb-8 font-semibold'>{product.description}.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad aspernatur assumenda praesentium, quod facilis placeat sequi nemo quam ab qui unde labore! Fugiat illum labore consequuntur corporis quas nemo?</p>
                    <div className='flex items-center gap-5 absolute bottom-3'>
                        <span>${product.price}</span>
                        <ProductBoxButton {...product} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Product