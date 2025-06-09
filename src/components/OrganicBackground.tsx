import React from 'react';

export const OrganicBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100">
      {/* Flowing organic shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="shape1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8a29e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#78716c" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="shape2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="shape3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0e7490" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Large flowing shapes */}
        <path d="M0,200 Q300,100 600,180 T1200,160 L1200,400 Q900,350 600,380 T0,360 Z" fill="url(#shape1)" />
        <path d="M0,350 Q400,280 800,320 T1200,300 L1200,550 Q800,480 400,520 T0,500 Z" fill="url(#shape2)" />
        <path d="M0,500 Q350,420 700,460 T1200,440 L1200,700 Q850,630 500,670 T0,650 Z" fill="url(#shape3)" />

        {/* Additional layered shapes for depth */}
        <path d="M200,0 Q500,80 800,60 T1200,80 L1200,250 Q900,180 600,200 T200,180 Z" fill="url(#shape1)" opacity="0.4" />
        <path d="M0,600 Q300,540 600,580 T1200,560 L1200,800 Q900,740 600,780 T0,760 Z" fill="url(#shape2)" opacity="0.3" />
      </svg>
    </div>
  );
};