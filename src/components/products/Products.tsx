import React from 'react'
import Container from '../container/Container'
import ProductBox from './product-box/ProductBox'
import { IProduct } from '@/app/api/products/route'

async function Products() {

    const resullt = await fetch("http://localhost:3000/api/products", {
        next:{
            revalidate:20,
        }
    })
    const products = await resullt.json();

    return (
        <Container>
            <div className='py-10'>
                <h2 className='font-semibold text-2xl text-center py-2 mb-5'>Products</h2>
                <div className="grid grid-cols-12 gap-14">
                    {
                        products.map((product: IProduct, key: string) => <ProductBox key={product._id} {...product} />)
                    }
                </div>

            </div>
        </Container>
    )
}

export default Products