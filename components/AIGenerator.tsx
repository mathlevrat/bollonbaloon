
import React, { useState } from 'react';
import { OCCASIONS } from '../constants';
import { generateBalloonText } from '../services/geminiService';

interface AIGeneratorProps {
  onTextGenerated: (text: string) => void;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ onTextGenerated }) => {
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const text = await generateBalloonText(occasion);
      onTextGenerated(text);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-t border-slate-200 pt-6">
      <h3 className="font-semibold mb-2 text-slate-600 flex items-center gap-2">
        <i className="fas fa-magic text-violet-500"></i>
        Idée de l'IA
      </h3>
      <p className="text-sm text-slate-500 mb-3">Pas d'inspiration ? Laissez Gemini vous aider !</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {OCCASIONS.map((occ) => (
            <option key={occ} value={occ}>{occ}</option>
          ))}
        </select>
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="px-4 py-2 bg-violet-500 text-white font-semibold rounded-lg shadow-sm hover:bg-violet-600 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex-shrink-0"
        >
          {isLoading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <span>Générer</span>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default AIGenerator;
