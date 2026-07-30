import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const mainTextColor = isDark ? 'text-[#2C2118]' : 'text-white';
  const taglineColor = isDark ? 'text-[#7C6E65]' : 'text-[#C8B8A6]';
  const goldColor = '#D4A373';

  const scaleHeights = {
    sm: 'h-4 sm:h-5',
    md: 'h-4.5 sm:h-6',
    lg: 'h-7 sm:h-9',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center whitespace-nowrap select-none ${className}`}>
      {/* Shopping bag handle icon */}
      <svg
        viewBox="0 0 100 42"
        className={`${scaleHeights[size]} w-auto mb-0.5`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Handle */}
        <path
          d="M 36 22 C 36 9, 64 9, 64 22"
          stroke={goldColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Bag body top */}
        <path
          d="M 22 22 H 78 V 40 H 22 Z"
          stroke={goldColor}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>

      {/* AZAG Text */}
      <span
        className={`font-serif tracking-[0.25em] font-black uppercase leading-none whitespace-nowrap ${mainTextColor} ${
          size === 'lg'
            ? 'text-2xl sm:text-4xl'
            : size === 'sm'
            ? 'text-sm sm:text-lg'
            : 'text-base sm:text-2xl'
        }`}
      >
        AZAG
      </span>

      {/* Tagline */}
      {showTagline && (
        <span
          className={`text-[7.5px] sm:text-[9.5px] tracking-[0.18em] font-sans uppercase font-bold whitespace-nowrap mt-0.5 ${taglineColor}`}
        >
          QUALITÉ • STYLE • CONFIANCE
        </span>
      )}
    </div>
  );
};

