import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CircuitBackground } from '@/components/CircuitBackground';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CircuitBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-2">{'>'} LEGAL_DOCUMENTATION</p>
            <h1 className="text-3xl md:text-4xl font-display text-foreground mb-4">TERMS & CONDITIONS</h1>
            <p className="text-foreground-muted font-mono text-sm">Last Updated: January 2026</p>
          </div>

          {/* Terminal Window Content */}
          <div className="terminal-panel">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-foreground-muted text-sm font-mono">terms_of_service.md</span>
            </div>

            <div className="p-6 md:p-8 space-y-8 font-mono text-sm">
              <section>
                <h2 className="text-primary mb-3">{'>'} 1. ACCEPTANCE_OF_TERMS</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  By accessing and using the QREW ONLY website and services, you accept and agree 
                  to be bound by the terms and provision of this agreement. If you do not agree 
                  to these terms, you should not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 2. USE_LICENSE</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  Permission is granted to temporarily access and view the materials on QREW ONLY's 
                  website for personal, non-commercial transitory viewing only. Under this license you may not:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose</li>
                  <li>• Attempt to decompile or reverse engineer any software on the site</li>
                  <li>• Remove any copyright or proprietary notations from the materials</li>
                  <li>• Transfer the materials to another person or "mirror" the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 3. PRODUCT_INFORMATION</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  We strive to provide accurate product descriptions and pricing. However, we do 
                  not warrant that product descriptions, pricing, or other content is accurate, 
                  complete, reliable, current, or error-free. We reserve the right to:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Correct any errors, inaccuracies, or omissions</li>
                  <li>• Change or update information at any time without prior notice</li>
                  <li>• Limit quantities of any products or services</li>
                  <li>• Refuse any order placed through the site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 4. QREW_MEMBERS_ONLY_ACCESS</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  Access to the QREW MEMBERS ONLY section requires authentication. By accessing 
                  this section, you agree to:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Keep your access credentials confidential</li>
                  <li>• Not share your password with others</li>
                  <li>• Immediately notify us of any unauthorized use</li>
                  <li>• Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 5. ORDERS_AND_PAYMENT</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  All orders are subject to acceptance and availability. We reserve the right to 
                  refuse or cancel any order. Payment must be received before order processing. 
                  We accept major credit cards and other payment methods as displayed during checkout.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 6. SHIPPING_AND_DELIVERY</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  Shipping times are estimates and not guaranteed. We ship to addresses within 
                  specified regions. Risk of loss and title for items pass to you upon delivery 
                  to the carrier. We are not responsible for delays caused by shipping carriers.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 7. RETURNS_AND_REFUNDS</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  Returns are accepted within 30 days of purchase for unworn, unwashed items with 
                  tags attached. Refunds will be processed to the original payment method within 
                  7-10 business days of receiving the return. Shipping costs are non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 8. INTELLECTUAL_PROPERTY</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  All content, trademarks, logos, and intellectual property displayed on this site 
                  are the property of QREW ONLY. You may not use, reproduce, or distribute any 
                  content without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 9. USER_CONDUCT</h2>
                <p className="text-foreground-secondary mb-3">You agree not to:</p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Use the site for any unlawful purpose</li>
                  <li>• Harass, abuse, or harm other users</li>
                  <li>• Transmit any viruses or malicious code</li>
                  <li>• Attempt to gain unauthorized access to any systems</li>
                  <li>• Interfere with the proper working of the site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 10. LIMITATION_OF_LIABILITY</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  QREW ONLY shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of or inability to use the site or 
                  products. Our total liability shall not exceed the amount paid for the product 
                  or service.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 11. MODIFICATIONS</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  We reserve the right to revise these terms at any time without notice. By using 
                  this website, you agree to be bound by the current version of these terms and 
                  conditions.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 12. CONTACT_INFORMATION</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:<br />
                  <span className="text-primary">Email: legal@qrewonly.com</span><br />
                  Response time: 24-48 hours
                </p>
              </section>

              {/* Agreement Notice */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-primary text-center">
                  {'>'} BY_USING_THIS_SITE, YOU_ACKNOWLEDGE_THAT_YOU_HAVE_READ_AND_AGREE_TO_THESE_TERMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
