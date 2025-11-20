
export type BalloonShapeType = 'round' | 'heart' | 'star';

export interface BalloonShape {
  id: BalloonShapeType;
  name: string;
  path: string;
  viewBox: string;
}

export interface BalloonColor {
  name: string;
  hex: string;
  tailwindBg: string;
  tailwindText: string;
}

export interface BalloonConfig {
  shape: BalloonShape;
  color: BalloonColor;
  text: string;
  textColor: string;
  imageUrl: string | null;
}