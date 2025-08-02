import { Metadata, ResolvingMetadata } from 'next';
import { IProduct } from '@/app/api/products/route';
import NotFound from '@/app/not-found';
import Container from '@/components/container/Container';
import ProductBox from '@/components/products/product-box/ProductBox';

interface ICategoryProps {
  params: { category: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: ICategoryProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${params.category} Products | Your Store`,
    description: `Browse our ${params.category} collection`,
  };
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
      <h1 className="text-2xl font-bold mb-8 capitalize">{category} Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8'>
        {productsCategory.map((item) => (
          <ProductBox {...item} key={item._id} />
        ))}
      </div>
    </Container>
  );
}

export default ProductCategory;