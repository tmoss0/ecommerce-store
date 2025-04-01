import { Product } from '../../../types/product';
import ProductCard from '../../../ProductCard';

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

export default async function ProductsPage() {
  // Fetch products from the API
  const products: Product[] = await fetchProducts();

  if (!products || products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}