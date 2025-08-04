import React from 'react'
import ProductBox from '../product-box/ProductBox';
import { IProduct } from '@/app/api/products/route';

async function ProductsContent() {

    const baseUrl = process.env.NODE_ENV === 'production'
        ? 'https://next-mart-gamma.vercel.app/'
        : 'http://localhost:3000';


    const resullt = await fetch(`${baseUrl}/api/products`)
    const products = await resullt.json();
    return (
        <div className="grid grid-cols-12 sm:gap-10">
            {
                products.map((product: IProduct, key: string) => <ProductBox key={product._id} {...product} />)
            }
        </div>
    )
}

export default ProductsContent