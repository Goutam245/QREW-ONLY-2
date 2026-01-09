import React from 'react';
import { ProductCard, Product } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  className?: string;
  isExclusive?: boolean;
  onAddToCart?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  className,
  isExclusive = false,
  onAddToCart,
}) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className="fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProductCard
            product={product}
            isExclusive={isExclusive}
            originalPrice={isExclusive ? product.price * 1.3 : undefined}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  );
};
