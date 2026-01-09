import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import qrewLogo from '@/assets/qrew-only-logo.png';

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'PRODUCTS', path: '/products' },
  { label: 'QREW_MEMBERS_ONLY', path: '/qrew' },
  { label: 'ABOUT', path: '/about' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity isolate"
          >
            <img 
              src={qrewLogo} 
              alt="QREW ONLY" 
              className="h-10 w-auto object-contain"
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(500%) hue-rotate(85deg) brightness(110%) contrast(110%) drop-shadow(0 0 15px #00ff41)',
                background: 'transparent'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-2 text-sm font-mono tracking-terminal transition-all duration-300 hover-underline',
                  location.pathname === item.path
                    ? 'text-primary text-glow'
                    : 'text-foreground-secondary hover:text-primary'
                )}
              >
                <span className="text-primary mr-1">{'>'}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Online Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-mono status-online-flicker">
              <span className="relative flex h-2 w-2 status-dot-pulse">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-success">ONLINE</span>
            </div>
            <a 
              href="https://instagram.com/qrewonly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-primary transition-colors text-sm font-mono"
            >
              @QREWONLY
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <div className="terminal-panel p-4 mt-2">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'block px-4 py-3 text-sm font-mono tracking-terminal transition-all duration-300',
                    location.pathname === item.path
                      ? 'text-primary bg-primary/10 border-l-2 border-primary'
                      : 'text-foreground-secondary hover:text-primary hover:bg-primary/5'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-primary mr-2">{'>'}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-mono status-online-flicker">
                <span className="relative flex h-2 w-2 status-dot-pulse">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                <span className="text-success">ONLINE</span>
              </div>
              <a 
                href="https://instagram.com/qrewonly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary text-sm font-mono"
              >
                @QREWONLY
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
