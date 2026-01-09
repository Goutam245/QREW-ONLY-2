import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductGrid } from '@/components/ProductGrid';
import { SectionHeader } from '@/components/SectionHeader';
import { PasswordGate } from '@/components/PasswordGate';
import { MatrixRain } from '@/components/MatrixRain';
import { exclusiveProducts } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { Clock, Shield, Star, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QrewExclusive: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionTime, setSessionTime] = useState(30 * 60); // 30 minutes
  const { toast } = useToast();

  useEffect(() => {
    // Check if already authenticated
    const session = sessionStorage.getItem('qrew_authenticated');
    if (session) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && sessionTime > 0) {
      const timer = setInterval(() => {
        setSessionTime((prev) => {
          if (prev <= 1) {
            sessionStorage.removeItem('qrew_authenticated');
            setIsAuthenticated(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isAuthenticated, sessionTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAddToCart = (product: typeof exclusiveProducts[0]) => {
    toast({
      title: '> ITEM_ADDED_TO_CART',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('qrew_authenticated');
    setIsAuthenticated(false);
    setSessionTime(30 * 60);
  };

  // Always render Navigation, but conditionally render content
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MatrixRain />
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Session Banner */}
          <div className="terminal-panel p-4 mb-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-success">SECURE_SESSION_ACTIVE</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <span className="text-foreground-muted">SESSION_EXPIRES_IN:</span>
                  <span className={sessionTime < 300 ? 'text-destructive' : 'text-warning'}>
                    {formatTime(sessionTime)}
                  </span>
                </div>
                <Button
                  variant="terminal-outline"
                  size="sm"
                  onClick={handleLogout}
                  className="gap-2"
                >
                  <LogOut className="w-3 h-3" />
                  LOGOUT
                </Button>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm">QREW_MEMBER</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              WELCOME_BACK, <span className="text-primary text-glow">QREW</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Access exclusive pre-orders, member-only pricing, and limited edition drops
              before anyone else.
            </p>
          </div>

          <SectionHeader
            title="EXCLUSIVE_DROPS"
            subtitle="Available only to QREW members"
          />
        </div>
      </section>

      {/* Exclusive Products */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <ProductGrid
            products={exclusiveProducts}
            isExclusive
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-background-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="MEMBER_BENEFITS"
            subtitle="Your exclusive advantages as a QREW member"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <BenefitCard
              title="EARLY_ACCESS"
              description="Get first dibs on all new drops 48 hours before public release."
              icon="🔓"
            />
            <BenefitCard
              title="EXCLUSIVE_PRICING"
              description="Save up to 30% on all products with member-only discounts."
              icon="💰"
            />
            <BenefitCard
              title="LIMITED_EDITIONS"
              description="Access to products never available to the general public."
              icon="✨"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const BenefitCard: React.FC<{ title: string; description: string; icon: string }> = ({
  title,
  description,
  icon,
}) => (
  <div className="terminal-panel p-6 text-center hover:shadow-glow hover:border-primary transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-mono text-sm font-bold text-primary mb-2">{title}</h3>
    <p className="text-foreground-secondary text-sm">{description}</p>
  </div>
);

export default QrewExclusive;
