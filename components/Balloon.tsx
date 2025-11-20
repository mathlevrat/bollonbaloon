
import React from 'react';
import type { BalloonConfig } from '../types';

interface BalloonProps {
  config: BalloonConfig;
}

const Balloon: React.FC<BalloonProps> = ({ config }) => {
  const { shape, color, text, textColor, imageUrl } = config;

  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center animate-pulse-slow">
      <svg
        viewBox={shape.viewBox}
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: `drop-shadow(0 10px 15px ${color.hex}40)` }}
      >
        <path d={shape.path} fill={color.hex} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Custom upload"
            className="w-1/4 h-1/4 object-cover rounded-full mb-2 border-2 border-white shadow-lg"
          />
        )}
        {text && (
          <p
            className="font-bold text-center break-words"
            style={{
              color: textColor,
              fontSize: 'clamp(1rem, 8vw, 2.5rem)',
              textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
              lineHeight: 1.1,
            }}
          >
            {text}
          </p>
        )}
      </div>
      {/* Balloon String */}
      <div 
        className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24 bg-slate-300"
        style={{
            background: 'linear-gradient(to bottom, transparent, #d1d5db)',
        }}
      ></div>
    </div>
  );
};

export default Balloon;
