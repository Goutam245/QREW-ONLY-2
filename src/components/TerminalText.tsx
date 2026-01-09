import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TerminalText: React.FC<TerminalTextProps> = ({
  text,
  className,
  speed = 50,
  delay = 0,
  showCursor = true,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={cn('font-mono', className)}>
      {displayedText}
      {showCursor && (isTyping || !isComplete) && (
        <span className="terminal-cursor" />
      )}
    </span>
  );
};

interface TerminalLineProps {
  prefix?: string;
  text: string;
  className?: string;
  prefixClassName?: string;
  delay?: number;
  speed?: number;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({
  prefix = '>',
  text,
  className,
  prefixClassName,
  delay = 0,
  speed = 30,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  if (!show) return null;

  return (
    <div className={cn('flex items-start gap-2', className)}>
      <span className={cn('text-primary', prefixClassName)}>{prefix}</span>
      <TerminalText text={text} speed={speed} showCursor={false} />
    </div>
  );
};
