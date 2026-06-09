import React from 'react';

interface SvgLogoProps {
  className?: string;
}

export default function SvgLogo({ className = "w-12 h-12" }: SvgLogoProps) {
  return (
    <svg 
      viewBox="0 0 100 240" 
      className={className} 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The geometric square dot */}
      <rect x="25" y="25" width="50" height="50" />
      
      {/* The geometric comma shape */}
      {/* 
        M 25 100 -> Top left
        L 75 100 -> Top right
        L 75 160 -> Down right edge
        C 75 210, 60 230, 25 240 -> Outer curve sweeping to bottom-left tip
        C 50 220, 50 180, 50 160 -> Inner curve sweeping back up
        L 25 160 -> Cut back to left edge
        Z -> Close path (straight up to top left)
      */}
      <path d="M 25 100 L 75 100 L 75 160 C 75 210 60 230 25 240 C 55 220 50 180 50 160 L 25 160 Z" />
    </svg>
  );
}
