import { IProduct } from '@/app/api/products/route';
import Container from '@/components/container/Container';
import ProductBox from '@/components/products/product-box/ProductBox';
import React from 'react';

interface ICategory {
    params: Promise<{ category: string }>
}

async function ProductCategory({ params }: ICategory) {

    const { category } = await params;

    const result = await fetch(`http://localhost:3000/api/category/${category}`);
    const productsCategory = await result.json();


    return (
        <Container>
            <div className='grid grid-cols-12 gap-y-20 py-20'>
                {
                    productsCategory.map((item: IProduct, key: string) => <ProductBox {...item} key={item._id} />)
                }
            </div>
        </Container>
    )
}

export default ProductCategory