import { useEffect, useState, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
}

export const useCountUp = ({ end, duration = 2000, decimals = 0 }: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Intersection Observer to trigger animation when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  // Count up animation
  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation (ease-out-quart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, hasAnimated, end, duration]);

  const formatValue = useCallback((value: number) => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    return Math.floor(value).toLocaleString();
  }, [decimals]);

  return { count, formattedCount: formatValue(count), elementRef };
};
