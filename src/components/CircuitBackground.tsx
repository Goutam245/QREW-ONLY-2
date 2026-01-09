import React from 'react';

export const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* SVG Circuit Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <path
              d="M0 50 H30 M70 50 H100"
              stroke="hsl(135, 100%, 50%)"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Vertical lines */}
            <path
              d="M50 0 V30 M50 70 V100"
              stroke="hsl(135, 100%, 50%)"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Nodes */}
            <circle cx="50" cy="50" r="2" fill="hsl(135, 100%, 50%)" />
            <circle cx="30" cy="50" r="1.5" fill="hsl(135, 100%, 50%)" />
            <circle cx="70" cy="50" r="1.5" fill="hsl(135, 100%, 50%)" />
            <circle cx="50" cy="30" r="1.5" fill="hsl(135, 100%, 50%)" />
            <circle cx="50" cy="70" r="1.5" fill="hsl(135, 100%, 50%)" />
            {/* Corner connections */}
            <path
              d="M30 50 L30 30 L50 30"
              stroke="hsl(135, 100%, 50%)"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M70 50 L70 70 L50 70"
              stroke="hsl(135, 100%, 50%)"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
          
          {/* Animated pulse gradient */}
          <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(135, 100%, 50%)" stopOpacity="0.1">
              <animate
                attributeName="stopOpacity"
                values="0.1;0.2;0.1"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="hsl(135, 100%, 50%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        
        {/* Animated pulse overlay */}
        <circle cx="50%" cy="50%" r="40%" fill="url(#pulse-gradient)">
          <animate
            attributeName="r"
            values="30%;50%;30%"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Vertical QREW ONLY text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 writing-vertical opacity-[0.03]">
        <span className="text-primary text-[120px] font-display font-bold tracking-widest"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          QREW ONLY
        </span>
      </div>
      
      {/* Right side text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03]">
        <span className="text-primary text-[120px] font-display font-bold tracking-widest"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
          QREW ONLY
        </span>
      </div>
    </div>
  );
};
