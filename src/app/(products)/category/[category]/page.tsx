import { IProduct } from '@/app/api/products/route';
import NotFound from '@/app/not-found';
import Container from '@/components/container/Container';
import ProductBox from '@/components/products/product-box/ProductBox';
import React from 'react';

interface ICategoryProps {
  params: { category: string };
}

async function ProductCategory({ params }: ICategoryProps) {
  const { category } = params;

  const result = await fetch(`http://localhost:3000/api/category/${category}`, {
    cache: 'no-store',
  });

  if (!result.ok) return <NotFound />;

  const productsCategory: IProduct[] = await result.json();

  return (
    <Container>
      <div className='grid grid-cols-12 sm:gap-x-15 gap-y-20 py-20'>
        {productsCategory.map((item: IProduct) => (
          <ProductBox {...item} key={item._id} />
        ))}
      </div>
    </Container>
  );
}

export default ProductCategory;
