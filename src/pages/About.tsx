import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { CircuitBackground } from '@/components/CircuitBackground';
import { Users, Target, Zap, Globe, Shield, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <CircuitBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-foreground-secondary font-mono text-lg">
              More than a brand. A community.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Welcome to <span className="text-primary text-glow">QREW ONLY</span>.
            </h1>
          </div>
        </div>
      </section>

      {/* Brand Values - Removed About Section body content per client request */}

      {/* Features Grid */}
      <section className="py-16 bg-background-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={Users}
                title="COMMUNITY_FIRST"
                description="Building a global network of like-minded individuals who share our vision."
              />
              <FeatureCard
                icon={Zap}
                title="INNOVATION_DRIVEN"
                description="Pushing boundaries in design, technology, and customer experience."
              />
              <FeatureCard
                icon={Shield}
                title="QUALITY_ASSURED"
                description="Premium materials and craftsmanship in every product we release."
              />
              <FeatureCard
                icon={Globe}
                title="GLOBAL_REACH"
                description="Shipping to 50+ countries with localized support and fast delivery."
              />
              <FeatureCard
                icon={Target}
                title="TECH_INTEGRATED"
                description="Seamless digital experiences from browsing to unboxing."
              />
              <FeatureCard
                icon={Heart}
                title="EXCLUSIVE_ACCESS"
                description="Members-only drops and early access to limited editions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader title="Brand Values" />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ValueCard
              title="INTEGRITY."
              description="We do what's right for the QREW."
            />
            <ValueCard
              title="COMMUNITY."
              description="We design with everyone in mind, creating clothing that brings loners together."
            />
            <ValueCard
              title="QUALITY."
              description="Every detail is intentional, our construction is thoughtful, and what we create is built to last."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="terminal-panel p-6 hover:shadow-glow hover:border-primary transition-all duration-300">
    <div className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
      <div>
        <h3 className="font-mono text-sm font-bold text-foreground mb-2">{title}</h3>
        <p className="text-foreground-secondary text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const ValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="text-center space-y-4">
    <h3 className="text-2xl font-display font-bold text-primary text-glow">{title}</h3>
    <p className="text-foreground-secondary">{description}</p>
  </div>
);

export default About;
