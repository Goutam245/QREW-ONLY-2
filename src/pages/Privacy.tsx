import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CircuitBackground } from '@/components/CircuitBackground';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CircuitBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-2">{'>'} PRIVACY_DOCUMENTATION</p>
            <h1 className="text-3xl md:text-4xl font-display text-foreground mb-4">PRIVACY POLICY</h1>
            <p className="text-foreground-muted font-mono text-sm">Last Updated: January 2026</p>
          </div>

          {/* Terminal Window Content */}
          <div className="terminal-panel">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-foreground-muted text-sm font-mono">privacy_policy.md</span>
            </div>

            <div className="p-6 md:p-8 space-y-8 font-mono text-sm">
              <section>
                <h2 className="text-primary mb-3">{'>'} 1. INFORMATION_WE_COLLECT</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  We collect information that you provide directly to us:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Name, email address, phone number</li>
                  <li>• Shipping and billing address</li>
                  <li>• Payment information (processed securely)</li>
                  <li>• Account credentials for QREW MEMBERS ONLY</li>
                  <li>• Order history and preferences</li>
                  <li>• Communications with customer service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 2. AUTOMATICALLY_COLLECTED_DATA</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  When you visit our site, we automatically collect:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Referring website addresses</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 3. HOW_WE_USE_YOUR_INFORMATION</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  We use collected information to:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Process and fulfill your orders</li>
                  <li>• Communicate about orders and account</li>
                  <li>• Provide customer support</li>
                  <li>• Send marketing communications (with consent)</li>
                  <li>• Improve our website and services</li>
                  <li>• Prevent fraud and ensure security</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 4. INFORMATION_SHARING</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  We may share your information with:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Service providers (shipping, payment processing)</li>
                  <li>• Business partners (with your consent)</li>
                  <li>• Law enforcement (when legally required)</li>
                  <li>• Affiliated companies within QREW ONLY group</li>
                </ul>
                <div className="mt-4 p-3 border border-primary/30 bg-primary/5 rounded">
                  <p className="text-primary">{'>'} WE_DO_NOT_SELL_YOUR_PERSONAL_INFORMATION_TO_THIRD_PARTIES</p>
                </div>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 5. COOKIES_AND_TRACKING</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  We use cookies to enhance your experience. You can control cookies through your 
                  browser settings. Types of cookies we use:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Essential cookies (required for site function)</li>
                  <li>• Performance cookies (site analytics)</li>
                  <li>• Functional cookies (remember preferences)</li>
                  <li>• Marketing cookies (personalized ads)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 6. DATA_SECURITY</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure payment processing (PCI compliant)</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls and authentication</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 7. YOUR_RIGHTS</h2>
                <p className="text-foreground-secondary leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="text-foreground-muted space-y-1 ml-4">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Data portability</li>
                  <li>• Object to certain data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 8. DATA_RETENTION</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  We retain your information for as long as necessary to fulfill purposes outlined 
                  in this policy, comply with legal obligations, resolve disputes, and enforce 
                  agreements. Account data is retained while your account is active.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 9. CHILDREN'S_PRIVACY</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  Our site is not intended for children under 13. We do not knowingly collect 
                  personal information from children. If we become aware of such collection, we 
                  will delete the information immediately.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 10. INTERNATIONAL_TRANSFERS</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  Your information may be transferred to and processed in countries other than 
                  your country of residence. We ensure appropriate safeguards are in place for 
                  such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 11. CHANGES_TO_PRIVACY_POLICY</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  We may update this policy periodically. We will notify you of material changes 
                  via email or site notification. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-3">{'>'} 12. CONTACT_FOR_PRIVACY_CONCERNS</h2>
                <p className="text-foreground-secondary leading-relaxed">
                  For privacy-related questions or to exercise your rights:<br />
                  <span className="text-primary">Email: privacy@qrewonly.com</span><br />
                  Response time: 30 days or less
                </p>
              </section>

              {/* Privacy Notice */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-primary text-center">
                  {'>'} YOUR_PRIVACY_IS_IMPORTANT_TO_US._WE_ARE_COMMITTED_TO_PROTECTING_YOUR_DATA
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

export default Privacy;
