
import React from 'react';

interface TextInputProps {
  text: string;
  textColor: string;
  onTextChange: (text: string) => void;
  onColorChange: (color: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, textColor, onTextChange, onColorChange }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-slate-600">Texte Personnalisé</h3>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          maxLength={30}
          placeholder="Votre message ici..."
          className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="color"
          value={textColor}
          onChange={(e) => onColorChange(e.target.value)}
          className="w-10 h-10 p-1 bg-white border border-slate-300 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TextInput;