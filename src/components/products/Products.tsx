import React, { Suspense } from 'react'
import Container from '../container/Container'
import ProductsContent from './product-content/ProductsContent'
import Loading from '../loading/Loading'

function Products() {

    return (
            <div className='py-10 bg-[var(--shop-bg)]'>
        <Container>
                <h2 className='font-semibold text-2xl text-center py-2 mb-5'>Products</h2>
                <Suspense fallback={<Loading />}>
                    <ProductsContent />
                </Suspense>
        </Container>
            </div>
    )
}

export default Products