
import type { BalloonColor, BalloonShape } from './types';

export const BALLOON_SHAPES: BalloonShape[] = [
  { id: 'round', name: 'Rond', path: 'M 50, 0 A 50,50 0 1,1 50,100 A 50,50 0 1,1 50,0 Z', viewBox: '0 0 100 100' },
  { id: 'heart', name: 'Cœur', path: 'M50 95C25 70 0 50 0 30 0 13.4 13.4 0 30 0c9.4 0 18.2 4.3 20 12.3C51.8 4.3 60.6 0 70 0 86.6 0 100 13.4 100 30c0 20-25 40-50 65z', viewBox: '0 0 100 100' },
  { id: 'star', name: 'Étoile', path: 'M50 0L61.8 38.2H100L69.1 61.8L80.9 100L50 76.4L19.1 100L30.9 61.8L0 38.2H38.2L50 0Z', viewBox: '0 0 100 100' },
];

export const BALLOON_COLORS: BalloonColor[] = [
  { name: 'Rouge', hex: '#ef4444', tailwindBg: 'bg-red-500', tailwindText: 'text-red-500' },
  { name: 'Rose', hex: '#ec4899', tailwindBg: 'bg-pink-500', tailwindText: 'text-pink-500' },
  { name: 'Orange', hex: '#f97316', tailwindBg: 'bg-orange-500', tailwindText: 'text-orange-500' },
  { name: 'Jaune', hex: '#eab308', tailwindBg: 'bg-yellow-500', tailwindText: 'text-yellow-500' },
  { name: 'Vert', hex: '#22c55e', tailwindBg: 'bg-green-500', tailwindText: 'text-green-500' },
  { name: 'Bleu', hex: '#3b82f6', tailwindBg: 'bg-blue-500', tailwindText: 'text-blue-500' },
  { name: 'Violet', hex: '#8b5cf6', tailwindBg: 'bg-violet-500', tailwindText: 'text-violet-500' },
  { name: 'Or', hex: '#d4af37', tailwindBg: 'bg-yellow-600', tailwindText: 'text-yellow-600' },
  { name: 'Argent', hex: '#c0c0c0', tailwindBg: 'bg-slate-400', tailwindText: 'text-slate-400' },
];

export const OCCASIONS: string[] = [
  'Anniversaire',
  'Mariage',
  'Naissance',
  'Remise de diplôme',
  'Saint-Valentin',
  'Fête des Mères',
  'Nouvel An'
];
