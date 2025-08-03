import React from 'react'
import ProductBox from '../product-box/ProductBox';
import { IProduct } from '@/app/api/products/route';

export const vercelDomain = process.env.NEXT_PUBLIC_BASE_URL as string

async function ProductsContent() {

    const resullt = await fetch(`${vercelDomain}/api/products`, {
        next: {
            revalidate: 20,
        }
    })
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