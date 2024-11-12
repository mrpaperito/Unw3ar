import { getProducts } from '@/lib/api';
import { ProductGrid } from '@/components/shop/product-grid';
import { ShopHeader } from '@/components/shop/shop-header';
import { FilterBar } from '@/components/shop/filter-bar';

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />
      <main className="container mx-auto px-4 py-8">
        <FilterBar />
        <ProductGrid products={products.data} />
      </main>
    </div>
  );
}