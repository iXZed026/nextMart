import React from 'react';
import Image from 'next/image'
import { IProduct } from '@/app/api/products/route';
import Link from 'next/link';
import AddToCartButton from './add-to-cart-button/AddToCartButton';


function ProductBox(props: IProduct) {



    return (
        <div className='xl:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 sm:flex-none'>
            <Link href={`/${props._id}`}>
                <div className='bg-white flex justify-center items-center mb-3 rounded-xl h-52'>
                    <Image
                        className='image product-image'
                        src={props.image}
                        width={0}
                        height={0}
                        sizes='100vw'
                        quality={60}
                        alt="product image"
                    />
                </div>
                <h4 className='text-md font-bold mb-3'>{props.title}</h4>
            </Link>
            <div className='flex justify-between items-center mb-4'>
                <span className='text-md font-bold'>${props.price}</span>
                <AddToCartButton {...props} />
            </div>
        </div>
    )
}

export default ProductBox
