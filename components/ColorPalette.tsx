
import React from 'react';
import { BALLOON_COLORS } from '../constants';
import type { BalloonColor } from '../types';

interface ColorPaletteProps {
  selectedColor: BalloonColor;
  onSelect: (color: BalloonColor) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ selectedColor, onSelect }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-slate-600">Couleur</h3>
      <div className="grid grid-cols-5 gap-2">
        {BALLOON_COLORS.map((color) => (
          <button
            key={color.name}
            title={color.name}
            onClick={() => onSelect(color)}
            className={`w-full aspect-square rounded-full transition-transform duration-150 transform hover:scale-110 focus:outline-none ${color.tailwindBg} ${
              selectedColor.hex === color.hex
                ? 'ring-2 ring-offset-2 ring-blue-500'
                : 'ring-1 ring-slate-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
