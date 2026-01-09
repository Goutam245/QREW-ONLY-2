import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { CircuitBackground } from '@/components/CircuitBackground';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const Index: React.FC = () => {
  const { toast } = useToast();

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

      {/* Hero */}
      <HeroSection />

      {/* Products Section */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="PRODUCTS"
            subtitle="Browse our latest drops and exclusive releases"
          />
          <ProductGrid products={products} onAddToCart={handleAddToCart} />
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* About Preview */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="terminal-panel p-8 md:p-12">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-primary font-mono text-sm">{'>'}</span>
                <span className="text-foreground font-mono text-sm">SYSTEM_INFO</span>
                <span className="flex-1 h-px bg-border ml-4" />
              </div>

              <div className="space-y-6 font-mono">
                <p className="text-foreground-secondary leading-relaxed">
                  We are not just a brand.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  We are a <span className="text-primary">collective</span>.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  A crew of <span className="text-primary">innovators</span>,{' '}
                  <span className="text-primary">creators</span>, and{' '}
                  <span className="text-primary">rebels</span>.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  Our mission: Deliver exclusive experiences that transcend traditional commerce.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-6 text-sm font-mono">
                  <div>
                    <span className="text-foreground-muted">FOUNDED:</span>{' '}
                    <span className="text-foreground">2024</span>
                  </div>
                  <div>
                    <span className="text-foreground-muted">LOCATION:</span>{' '}
                    <span className="text-foreground">GLOBAL</span>
                  </div>
                  <div>
                    <span className="text-foreground-muted">MISSION:</span>{' '}
                    <span className="text-primary">INNOVATE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
