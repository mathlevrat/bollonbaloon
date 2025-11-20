
import React from 'react';
import type { BalloonConfig } from '../types';
import Balloon from './Balloon';

interface PreviewPanelProps {
  config: BalloonConfig;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ config }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8 h-[70vh] flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4 text-slate-600 absolute top-6">Aperçu</h2>
      <div className="w-full h-full flex items-center justify-center">
         <Balloon config={config} />
      </div>
       <div className="absolute bottom-4 right-4 text-xs text-slate-400">
        <i className="fas fa-ruler-combined mr-1"></i>
        La taille et la position sont à titre indicatif
      </div>
    </div>
  );
};

export default PreviewPanel;
