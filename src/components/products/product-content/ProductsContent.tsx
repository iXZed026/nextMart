import React from 'react'
import ProductBox from '../product-box/ProductBox';
import { IProduct } from '@/app/api/products/route';

async function ProductsContent() {

    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
    let products;

    if (result.ok) {
        products = await result.json()
    } else {
        products = []
    }


    return (
        <div className="grid grid-cols-12 sm:gap-10">
            {
                products.length > 0 && products.map((product: IProduct) => <ProductBox key={product._id} {...product} />)
            }
        </div>
    )
}

export default ProductsContent