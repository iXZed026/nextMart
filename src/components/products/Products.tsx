import React, { Suspense } from 'react'
import Container from '../container/Container'
import ProductsContent from './product-content/ProductsContent'
import Loading from '../loading/Loading'

function Products() {

    return (
        <Container>
            <div className='py-10'>
                <h2 className='font-semibold text-2xl text-center py-2 mb-5'>Products</h2>
                <Suspense fallback={<Loading />}>
                    <ProductsContent />
                </Suspense>
            </div>
        </Container>
    )
}

export default Products