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


    // const products = [
    //     {
    //         _id: "687e1e63b05bd7148d510012",
    //         title: "Samsung Galaxy Tab S9 Ultra",
    //         description: "Large Android tablet with 14.6 AMOLED display and S Pen",
    //         price: 1199,
    //         category: "Tablet",
    //         image: "/images/8.png",
    //     }
    // ];

    return (
        <div className="grid grid-cols-12 sm:gap-10">
            {
                products.length > 0 && products.map((product: IProduct) => <ProductBox key={product._id} {...product} />)
            }
        </div>
    )
}

export default ProductsContent