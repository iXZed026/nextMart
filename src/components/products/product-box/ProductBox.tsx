import React from 'react';
import Image from 'next/image'
import { IProduct } from '@/app/api/products/route';


function ProductBox(props: IProduct) {
    return (
        <div className='col-span-3'>
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
            <div className='flex justify-between items-center mb-4'>
                <span className='text-md font-bold'>${props.price}</span>
                <button className='button'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductBox
