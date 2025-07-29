import React from 'react'
import ProductBox from '../product-box/ProductBox';
import { IProduct } from '@/app/api/products/route';

async function ProductsContent() {

    const resullt = await fetch("http://localhost:3000/api/products", {
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