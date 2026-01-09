import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface PasswordGateProps {
  onAuthenticated: () => void;
  correctPassword?: string;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({
  onAuthenticated,
  correctPassword = 'QREW2024',
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [accessGranted, setAccessGranted] = useState(false);
  const [progress, setProgress] = useState(0);

  const maxAttempts = 5;
  const lockDuration = 60; // seconds

  useEffect(() => {
    // Check if already authenticated
    const session = sessionStorage.getItem('qrew_authenticated');
    if (session) {
      onAuthenticated();
    }
  }, [onAuthenticated]);

  useEffect(() => {
    if (isLocked && lockTimer > 0) {
      const timer = setTimeout(() => setLockTimer(lockTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isLocked && lockTimer === 0) {
      setIsLocked(false);
      setAttempts(0);
    }
  }, [isLocked, lockTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked || isVerifying) return;

    setIsVerifying(true);
    setError('');

    // Simulate verification delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Animate progress bar
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setProgress(i);
    }

    if (password.toUpperCase() === correctPassword.toUpperCase()) {
      setAccessGranted(true);
      sessionStorage.setItem('qrew_authenticated', 'true');
      
      // Show success animation then redirect
      setTimeout(() => {
        onAuthenticated();
      }, 2000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setProgress(0);

      if (newAttempts >= maxAttempts) {
        setIsLocked(true);
        setLockTimer(lockDuration);
        setError('ACCESS_DENIED: TOO_MANY_ATTEMPTS');
      } else {
        setError(`ACCESS_DENIED: INVALID_CREDENTIALS [${maxAttempts - newAttempts} attempts remaining]`);
      }
      setIsVerifying(false);
    }
  };

  if (accessGranted) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-20">
        <div className="terminal-panel p-8 md:p-12 max-w-md w-full mx-4 text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-success mx-auto animate-pulse" />
          <div className="space-y-2">
            <p className="text-success font-mono text-xl">✓ ACCESS_GRANTED</p>
            <p className="text-foreground font-mono">WELCOME_BACK, QREW_MEMBER</p>
          </div>
          <div className="space-y-2">
            <p className="text-foreground-secondary font-mono text-sm">
              INITIALIZING_SECURE_SESSION...
            </p>
            <div className="h-2 bg-background-secondary rounded overflow-hidden">
              <div className="h-full bg-success animate-pulse w-full" />
            </div>
          </div>
          <p className="text-foreground-muted font-mono text-sm">REDIRECTING...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-20 scanlines">
      <div className="terminal-panel p-8 md:p-12 max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-8">
          <pre className="text-primary text-xs font-mono opacity-70">
{`╔═══════════════════════════════════╗
║   RESTRICTED ACCESS ZONE          ║
╚═══════════════════════════════════╝`}
          </pre>

          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 mx-auto">
            <Lock className="w-8 h-8 text-primary" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
              EXCLUSIVE QREW ACCESS
            </h1>
            <p className="text-foreground-secondary font-mono text-sm">
              SECURITY_CLEARANCE_REQUIRED
            </p>
          </div>
        </div>

        {isLocked ? (
          <div className="space-y-4 py-8 text-center">
            <AlertTriangle className="w-12 h-12 text-destructive mx-auto" />
            <p className="text-destructive font-mono text-sm">{error}</p>
            <p className="text-foreground-muted font-mono text-sm">
              LOCKOUT_EXPIRES_IN: {lockTimer}s
            </p>
            <div className="h-2 bg-background-secondary rounded overflow-hidden">
              <div
                className="h-full bg-destructive transition-all duration-1000"
                style={{ width: `${(lockTimer / lockDuration) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-left text-foreground-muted font-mono text-sm">
                {'>'} ENTER_ACCESS_CODE:
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-terminal pr-10 font-mono tracking-widest h-12"
                  placeholder="________________"
                  disabled={isVerifying}
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {isVerifying && (
              <div className="space-y-2">
                <p className="text-primary font-mono text-sm">
                  VERIFYING_CREDENTIALS...
                </p>
                <div className="h-2 bg-background-secondary rounded overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {error && !isVerifying && (
              <div className="flex items-center gap-2 text-destructive font-mono text-sm">
                <AlertTriangle size={16} />
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="terminal"
              className="w-full h-12"
              disabled={isVerifying || !password}
            >
              {isVerifying ? 'VERIFYING...' : 'GRANT ACCESS'}
            </Button>
          </form>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-foreground-muted font-mono text-xs">
            AUTHENTICATED MEMBERS ONLY
          </p>
        </div>
      </div>
    </div>
  );
};
