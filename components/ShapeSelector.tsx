
import React from 'react';
import { BALLOON_SHAPES } from '../constants';
import type { BalloonShape } from '../types';

interface ShapeSelectorProps {
  selectedShape: BalloonShape;
  onSelect: (shape: BalloonShape) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({ selectedShape, onSelect }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-slate-600">Forme</h3>
      <div className="flex gap-2">
        {BALLOON_SHAPES.map((shape) => (
          <button
            key={shape.id}
            onClick={() => onSelect(shape)}
            className={`w-full p-2 border-2 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedShape.id === shape.id
                ? 'bg-blue-500 border-blue-500 text-white shadow-md'
                : 'bg-white border-slate-300 text-slate-700 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            {shape.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShapeSelector;