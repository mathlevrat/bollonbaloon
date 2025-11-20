
import React, { useState } from 'react';
import { BalloonConfig } from './types';
import { BALLOON_COLORS, BALLOON_SHAPES } from './constants';
import ControlsPanel from './components/ControlsPanel';
import PreviewPanel from './components/PreviewPanel';

const App: React.FC = () => {
  const [balloonConfig, setBalloonConfig] = useState<BalloonConfig>({
    shape: BALLOON_SHAPES[0],
    color: BALLOON_COLORS[0],
    text: 'Joyeux Anniversaire!',
    textColor: '#ffffff',
    imageUrl: null,
  });

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <i className="fas fa-birthday-cake text-3xl text-pink-500"></i>
          <h1 className="text-2xl font-bold text-slate-700">Créateur de Ballon Personnalisé</h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ControlsPanel config={balloonConfig} setConfig={setBalloonConfig} />
          </div>
          <div className="lg:col-span-8">
            <PreviewPanel config={balloonConfig} />
          </div>
        </div>
      </main>
      
      <footer className="text-center p-4 text-slate-500 text-sm mt-8">
        <p>Conçu avec <i className="fas fa-heart text-red-500"></i> et déployé sur Netlify.</p>
      </footer>
    </div>
  );
};

export default App;
