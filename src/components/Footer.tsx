import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import qrewLogo from '@/assets/qrew-only-logo.png';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background-secondary/50 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="terminal-panel p-6 md:p-8">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="ml-4 text-foreground-muted text-sm font-mono">system_credits.log</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* System Credits with Logo */}
            <div className="space-y-4">
              <div className="font-mono text-sm space-y-3">
                <p className="text-primary">{'>'} SYSTEM_CREDITS</p>
                
                {/* Logo */}
                <div className="my-4">
                  <img 
                    src={qrewLogo} 
                    alt="QREW ONLY" 
                    className="h-10 w-auto invert opacity-90"
                  />
                </div>
                
                <p className="text-foreground-secondary">
                  © {currentYear} QREW ONLY
                </p>
                <p className="text-foreground-muted">ALL_RIGHTS_RESERVED</p>
                <p className="text-foreground-muted text-xs leading-relaxed mt-2">
                  {'>'} A crew of innovators, creators, and rebels.<br />
                  {'>'} Delivering exclusive experiences.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <div className="font-mono text-sm space-y-2">
                <p className="text-primary">{'>'} NAVIGATION</p>
                <div className="space-y-1">
                  <FooterLink to="/" label="HOME" />
                  <FooterLink to="/products" label="PRODUCTS" />
                  <FooterLink to="/qrew" label="QREW_MEMBERS_ONLY" />
                  <FooterLink to="/about" label="ABOUT" />
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <div className="font-mono text-sm space-y-2">
                <p className="text-primary">{'>'} SUPPORT</p>
                <div className="space-y-1">
                  <FooterLink to="/contact" label="CONTACT" />
                  <FooterLink to="/terms" label="TERMS" />
                  <FooterLink to="/privacy" label="PRIVACY" />
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="space-y-4">
              <div className="font-mono text-sm space-y-2">
                <p className="text-primary">{'>'} SYSTEM_STATUS</p>
                <div className="space-y-1 text-foreground-secondary">
                  <p>
                    STATUS: <span className="text-success status-online-flicker">● OPERATIONAL</span>
                  </p>
                  <p>
                    VERSION: <span className="text-foreground">01.2026</span>
                  </p>
                  <p>
                    NEXT_DROP: <span className="text-primary">UNKNOWN</span>
                  </p>
                  <p>
                    REGION: <span className="text-foreground-muted">GLOBAL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-primary font-mono text-sm mb-3">{'>'} CONNECT_WITH_QREW</p>
                <div className="flex flex-wrap gap-3">
                  <SocialLink href="https://twitter.com/qrewonly" icon={Twitter} label="TWITTER" />
                  <SocialLink href="https://instagram.com/qrewonly" icon={Instagram} label="INSTAGRAM" />
                  <SocialLink href="https://youtube.com/@qrewonly" icon={Youtube} label="YOUTUBE" />
                  <SocialLink href="https://discord.gg/qrewonly" icon={MessageCircle} label="DISCORD" />
                </div>
              </div>

              {/* Newsletter */}
              <div className="md:max-w-sm">
                <p className="text-primary font-mono text-sm mb-2">{'>'} STAY_UPDATED</p>
                <p className="text-foreground-muted font-mono text-xs mb-3">Join the QREW for exclusive drops</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="flex-1 bg-background border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors min-w-0"
                  />
                  <button
                    type="submit"
                    className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-background font-mono text-sm py-2 px-4 rounded transition-all duration-300 whitespace-nowrap"
                  >
                    {subscribed ? '✓' : '>'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-border" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono">
            <div className="flex flex-wrap items-center justify-center gap-4 text-foreground-muted">
              <span className="text-primary">{'>'}</span>
              <FooterLink to="/terms" label="TERMS" inline />
              <span className="text-border">|</span>
              <FooterLink to="/privacy" label="PRIVACY" inline />
              <span className="text-border">|</span>
              <FooterLink to="/contact" label="CONTACT" inline />
            </div>

            <div className="flex items-center gap-4 text-foreground-muted">
              <span>BUILT_WITH:</span>
              <span className="text-primary">INNOVATION + CODE</span>
            </div>
          </div>

          {/* ASCII Art Footer */}
          <div className="mt-8 pt-4 border-t border-border text-center">
            <pre className="text-primary/30 text-[6px] sm:text-[8px] font-mono leading-tight">
{`═══════════════════════════════════════════════════════════════════════════════
                           MAINTAINED_BY: THE_QREW
═══════════════════════════════════════════════════════════════════════════════`}
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-background-secondary border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; label: string; inline?: boolean }> = ({
  to,
  label,
  inline = false,
}) => (
  <Link
    to={to}
    className={`text-foreground-secondary hover:text-primary transition-colors hover-underline ${
      inline ? '' : 'block'
    }`}
  >
    {!inline && <span className="text-foreground-muted mr-2">{'>'}</span>}
    {label}
  </Link>
);

const SocialLink: React.FC<{ href: string; icon: React.ElementType; label: string }> = ({
  href,
  icon: Icon,
  label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-border rounded-lg text-foreground-secondary hover:border-primary hover:text-primary transition-all duration-300 font-mono text-xs"
  >
    <Icon size={14} />
    {label}
  </a>
);
