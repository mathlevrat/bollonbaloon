
import React from 'react';
import type { BalloonConfig } from '../types';
import ShapeSelector from './ShapeSelector';
import ColorPalette from './ColorPalette';
import TextInput from './TextInput';
import ImageUploader from './ImageUploader';
import AIGenerator from './AIGenerator';

interface ControlsPanelProps {
  config: BalloonConfig;
  setConfig: React.Dispatch<React.SetStateAction<BalloonConfig>>;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({ config, setConfig }) => {
  const handleConfigChange = <K extends keyof BalloonConfig>(key: K, value: BalloonConfig[K]) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6 sticky top-8">
      <ShapeSelector
        selectedShape={config.shape}
        onSelect={(shape) => handleConfigChange('shape', shape)}
      />
      <ColorPalette
        selectedColor={config.color}
        onSelect={(color) => handleConfigChange('color', color)}
      />
      <TextInput
        text={config.text}
        textColor={config.textColor}
        onTextChange={(text) => handleConfigChange('text', text)}
        onColorChange={(color) => handleConfigChange('textColor', color)}
      />
      <ImageUploader
        imageUrl={config.imageUrl}
        onImageUpload={(url) => handleConfigChange('imageUrl', url)}
        onImageRemove={() => handleConfigChange('imageUrl', null)}
      />
      <AIGenerator
        onTextGenerated={(text) => handleConfigChange('text', text)}
      />
    </div>
  );
};

export default ControlsPanel;
