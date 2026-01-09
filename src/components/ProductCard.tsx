import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface Product {
  id: string;
  name: string;
  price: number;
  status: 'AVAILABLE' | 'LIMITED' | 'SOLD_OUT' | 'PRE_ORDER';
  image: string;
  category?: string;
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart?: (product: Product) => void;
  isExclusive?: boolean;
  originalPrice?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  onAddToCart,
  isExclusive = false,
  originalPrice,
}) => {
  const statusColors = {
    AVAILABLE: 'text-success',
    LIMITED: 'text-warning',
    SOLD_OUT: 'text-destructive',
    PRE_ORDER: 'text-info',
  };

  const statusLabels = {
    AVAILABLE: '[IN_STOCK]',
    LIMITED: '[LIMITED]',
    SOLD_OUT: '[SOLD_OUT]',
    PRE_ORDER: '[PRE_ORDER]',
  };

  return (
    <div
      className={cn(
        'group relative terminal-panel overflow-hidden transition-all duration-300 hover:-translate-y-1',
        'hover:shadow-glow hover:border-primary',
        className
      )}
    >
      {/* ASCII Border Corners */}
      <div className="absolute top-0 left-0 text-primary text-xs font-mono px-1">╔</div>
      <div className="absolute top-0 right-0 text-primary text-xs font-mono px-1">╗</div>
      <div className="absolute bottom-0 left-0 text-primary text-xs font-mono px-1">╚</div>
      <div className="absolute bottom-0 right-0 text-primary text-xs font-mono px-1">╝</div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-background-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
          }}
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={cn(
            'inline-block px-2 py-1 text-xs font-mono bg-background/80 backdrop-blur-sm border',
            statusColors[product.status],
            product.status === 'SOLD_OUT' ? 'border-destructive' : 'border-current'
          )}>
            {statusLabels[product.status]}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Product ID */}
        <div className="text-xs text-foreground-muted font-mono">
          PRODUCT_ID: {product.id}
        </div>

        {/* Separator */}
        <div className="border-t border-border" />

        {/* Name */}
        <h3 className="font-mono text-base text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Category */}
        {product.category && (
          <div className="text-xs text-foreground-muted font-mono">
            CAT: {product.category}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-foreground-muted text-sm font-mono">PRICE:</span>
          {isExclusive && originalPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-foreground-muted line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
              <span className="text-primary font-bold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-success text-xs">
                [SAVE ${(originalPrice - product.price).toFixed(2)}]
              </span>
            </div>
          ) : (
            <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Quantity */}
        {product.quantity !== undefined && product.status !== 'SOLD_OUT' && (
          <div className="text-xs text-foreground-muted font-mono">
            UNITS_REMAINING: <span className={product.quantity < 10 ? 'text-warning' : 'text-foreground'}>{product.quantity}</span>
          </div>
        )}

        {/* Action Button */}
        <Button
          variant="terminal"
          className="w-full mt-4"
          onClick={() => onAddToCart?.(product)}
          disabled={product.status === 'SOLD_OUT'}
        >
          {product.status === 'SOLD_OUT' ? 'UNAVAILABLE' : 
           product.status === 'PRE_ORDER' ? 'PRE_ORDER_NOW' : 
           'EXECUTE_ORDER'}
        </Button>
      </div>
    </div>
  );
};
