import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TerminalText } from '@/components/TerminalText';
import qrewLogo from '@/assets/qrew-only-logo.png';

const bootSequence = [
  { text: 'INITIALIZING_SYSTEM...', delay: 0 },
  { text: 'LOADING_ASSETS... [COMPLETE]', delay: 800 },
  { text: 'ESTABLISHING_CONNECTION... [SUCCESS]', delay: 1600 },
  { text: 'QREW ONLY', delay: 2400 },
  { text: '', delay: 3000 },
];

const asciiLogo = `
 ██████╗ ██████╗ ███████╗██╗    ██╗
██╔═══██╗██╔══██╗██╔════╝██║    ██║
██║   ██║██████╔╝█████╗  ██║ █╗ ██║
██║▄▄ ██║██╔══██╗██╔══╝  ██║███╗██║
╚██████╔╝██║  ██║███████╗╚███╔███╔╝
 ╚══▀▀═╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ 
`;

export const HeroSection: React.FC = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bootTimer = setTimeout(() => setBootComplete(true), 3500);
    const contentTimer = setTimeout(() => setShowContent(true), 4000);
    
    return () => {
      clearTimeout(bootTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-16 overflow-hidden scanlines">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Single Terminal Window - Contains Everything */}
        <div className="terminal-panel w-full p-6 md:p-8 lg:p-10">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="ml-4 text-foreground-muted text-xs md:text-sm font-mono">terminal@qrew:~</span>
          </div>

          {/* Boot Sequence */}
          <div className="space-y-2 font-mono text-xs md:text-sm text-left mb-8">
            {bootSequence.map((line, index) => (
              <BootLine key={index} text={line.text} delay={line.delay} />
            ))}
          </div>

          {/* Logo - Center of Terminal */}
          {bootComplete && (
            <div className="py-8 md:py-12 animate-fade-in isolate">
              <img 
                src={qrewLogo} 
                alt="QREW ONLY" 
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain mx-auto"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(500%) hue-rotate(85deg) brightness(110%) contrast(110%) drop-shadow(0 0 30px #00ff41) drop-shadow(0 0 60px rgba(0, 255, 65, 0.6))',
                  background: 'transparent'
                }}
              />
            </div>
          )}

          {/* Tagline */}
          {showContent && (
            <div className="space-y-8 animate-fade-in">
              <p className="text-foreground-secondary text-base md:text-lg">
                More than a brand. A community.
                <br />
                Welcome to <span className="text-primary font-semibold">QREW ONLY</span>.
              </p>

              {/* Status Bar */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs md:text-sm font-mono py-4 border-t border-b border-border/50">
                <div className="flex items-center gap-2">
                  <span className="text-foreground-muted">STATUS:</span>
                  <span className="text-success flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                    </span>
                    OPERATIONAL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground-muted">VERSION:</span>
                  <span className="text-foreground">01.2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground-muted">NEXT_DROP:</span>
                  <span className="text-primary animate-pulse">UNKNOWN</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto min-w-[200px]">
                  <Link to="/products">
                    <span className="relative z-10">ACCESS_SYSTEM</span>
                  </Link>
                </Button>
                <Button variant="terminal-outline" size="xl" asChild className="w-full sm:w-auto min-w-[200px]">
                  <Link to="/qrew">QREW_MEMBERS_ONLY</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showContent && (
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
};

const BootLine: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible || !text) return null;

  return (
    <div className="flex items-start gap-2 text-foreground-secondary">
      <span className="text-primary">{'>'}</span>
      <TerminalText text={text} speed={20} showCursor={false} />
    </div>
  );
};