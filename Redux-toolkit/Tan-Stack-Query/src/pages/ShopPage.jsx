import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '../api/productApi';
import { GridSkeleton } from '../components/GridSkeleton';
import { ProductCard } from '../components/ProductCard';


const ShopPage = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['productsData'],
    queryFn: productApi,
  });

  const products = Array.isArray(data) ? data : data?.products || [];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shop Products</h1>
          <p className="mt-2 text-sm text-gray-600">Explore our latest collection and exclusive offers.</p>
        </div>

        {/* Loading State */}
        {isPending && <GridSkeleton />}

        {/* Error State */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            <p className="font-semibold">Failed to load products.</p>
            <p className="mt-1 text-sm">{error.message || 'Something went wrong. Please try again.'}</p>
          </div>
        )}

        {/* Empty State */}
        {!isPending && !error && products.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-12 text-center text-gray-500">
            No products found.
          </div>
        )}

        {/* Product Grid */}
        {!isPending && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;