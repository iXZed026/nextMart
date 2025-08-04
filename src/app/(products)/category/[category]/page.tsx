import { IProduct } from '@/app/api/products/route';
import NotFound from '@/app/not-found';
import Container from '@/components/container/Container';
import ProductBox from '@/components/products/product-box/ProductBox';

interface ICategoryProps {
  params: Promise<{ category: string }>;
}

async function ProductCategory({ params }: ICategoryProps) {
  const { category } = await params;

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/${category}`, {
    cache: 'no-store',
  });

  if (!result.ok) return <NotFound />;

  const productsCategory: IProduct[] = await result.json();

  return (
    <Container>
      <h1 className="text-2xl font-bold my-10">{category} Products</h1>
      <div className='grid grid-cols-12 md:gap-15 sm:gap-20 gap-y-15 py-8'>
        {productsCategory.map((item) => (
          <ProductBox {...item} key={item._id} />
        ))}
      </div>
    </Container>
  );
}

export default ProductCategory;