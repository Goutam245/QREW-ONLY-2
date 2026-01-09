import React from 'react';
import { Shield, Zap, Lock, Users, Package, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { useCountUp } from '@/hooks/useCountUp';

const features = [
  {
    icon: Shield,
    title: 'SECURE_TRANSACTIONS',
    description: 'End-to-end encrypted payment processing with military-grade security protocols.',
    status: '[ACTIVE]',
  },
  {
    icon: Zap,
    title: 'INSTANT_DELIVERY',
    description: 'Lightning-fast order processing and worldwide shipping network integration.',
    status: '[ACTIVE]',
  },
  {
    icon: Lock,
    title: 'EXCLUSIVE_ACCESS',
    description: 'Password-protected QREW zone with early drops and member-only pricing.',
    status: '[ACTIVE]',
  },
  {
    icon: Users,
    title: 'COMMUNITY_DRIVEN',
    description: 'Built by the collective, for the collective. Your feedback shapes our future.',
    status: '[ACTIVE]',
  },
  {
    icon: Package,
    title: 'LIMITED_EDITIONS',
    description: 'Small batch releases ensure exclusivity. When it\'s gone, it\'s gone.',
    status: '[ACTIVE]',
  },
  {
    icon: Clock,
    title: '24/7_SUPPORT',
    description: 'Round-the-clock system monitoring and customer support terminals.',
    status: '[ACTIVE]',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-background-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="SYSTEM_CAPABILITIES"
          subtitle="Core features powering the QREW experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group terminal-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-primary fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-success text-xs font-mono">
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Stats Panel */}
        <div className="mt-16 terminal-panel p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-primary font-mono text-sm">{'>'}</span>
            <span className="text-foreground font-mono text-sm">REAL_TIME_METRICS</span>
            <span className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedStatItem label="ORDERS_PROCESSED" end={12847} trend="+23%" />
            <AnimatedStatItem label="ACTIVE_MEMBERS" end={4521} trend="+12%" />
            <AnimatedStatItem label="PRODUCTS_LIVE" end={48} trend="+5" />
            <AnimatedStatItem label="SATISFACTION" end={99.2} trend="+0.3%" suffix="%" decimals={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AnimatedStatItemProps {
  label: string;
  end: number;
  trend: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedStatItem: React.FC<AnimatedStatItemProps> = ({
  label,
  end,
  trend,
  suffix = '',
  decimals = 0,
}) => {
  const { formattedCount, elementRef } = useCountUp({ end, duration: 2000, decimals });

  return (
    <div className="text-center md:text-left">
      <div className="text-foreground-muted text-xs font-mono mb-1">{label}</div>
      <div className="text-2xl md:text-3xl font-display font-bold text-primary text-glow">
        <span ref={elementRef}>{formattedCount}</span>{suffix}
      </div>
      <div className="text-success text-xs font-mono mt-1">{trend}</div>
    </div>
  );
};
