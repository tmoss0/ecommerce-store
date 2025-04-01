import { Product } from '../../../../types/product';
import ProductDetail from '../../../../ProductDetail';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function fetchProductBySlug(slug: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductBySlug(params.slug);

  return <ProductDetail product={product} />;
}

export async function generateStaticParams() {
  const products: Product[] = await fetchProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
