import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductGrid } from '@/components/ProductGrid';
import { SectionHeader } from '@/components/SectionHeader';
import { CircuitBackground } from '@/components/CircuitBackground';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const categories = ['ALL', 'AVAILABLE', 'LIMITED', 'LATEST', 'PRE-ORDER'];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const { toast } = useToast();

  const filteredProducts = (() => {
    switch (activeCategory) {
      case 'ALL':
        return products;
      case 'AVAILABLE':
        return products.filter((p) => p.status === 'AVAILABLE');
      case 'LIMITED':
        return products.filter((p) => p.status === 'LIMITED');
      case 'LATEST':
        // Show the 3 most recent (simulated by taking first 3)
        return products.slice(0, 3);
      case 'PRE-ORDER':
        return products.filter((p) => p.status === 'PRE_ORDER');
      default:
        return products;
    }
  })();

  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: '> ITEM_ADDED_TO_CART',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <CircuitBackground />
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-12 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="PRODUCTS"
            subtitle="Browse our complete collection of exclusive merchandise"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <span className="text-foreground-muted font-mono text-sm self-center mr-2">FILTER:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-3 py-1.5 font-mono text-sm border transition-all duration-300',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground border-primary shadow-glow'
                    : 'bg-transparent text-foreground-secondary border-border hover:border-primary hover:text-primary'
                )}
              >
                [{category}]
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-6 font-mono text-sm text-foreground-muted">
            SHOWING: <span className="text-primary">{filteredProducts.length}</span> ITEMS
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
          ) : (
            <div className="text-center py-20 terminal-panel">
              <p className="text-foreground-muted font-mono">NO_ITEMS_FOUND</p>
              <p className="text-foreground-secondary font-mono text-sm mt-2">
                Try selecting a different filter
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
