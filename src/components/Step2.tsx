import React, { useState } from 'react';
import { Screen } from '../App';

export default function Step2({ setScreen }: { setScreen: (s: Screen) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    "J'ai peur d'oublier le son de sa voix...",
    "Je veux transmettre nos racines...",
    "C'est bientôt son anniversaire...",
    "Il/Elle a eu une vie incroyable..."
  ];

  const toggleOption = (opt: string) => {
    if (selected.includes(opt)) {
      setSelected(selected.filter(o => o !== opt));
    } else {
      setSelected([...selected, opt]);
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center justify-between text-sm font-bold text-primary mb-4 tracking-wider uppercase">
          <span>Étape 2 sur 4</span>
          <span>50%</span>
        </div>
        <div className="w-full bg-primary/10 h-2 rounded-full mb-8">
          <div className="bg-primary h-full rounded-full w-2/4"></div>
        </div>
        <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Votre motivation</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Qu'est-ce qui vous pousse à vouloir filmer son histoire aujourd'hui?</h1>
        <p className="text-slate-600 text-lg mt-6">Sélectionnez toutes les options qui s'appliquent :</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => toggleOption(opt)}
            className={`px-6 py-4 rounded-full border-2 text-lg font-medium transition-all duration-200 ${
              selected.includes(opt)
                ? 'border-primary bg-primary text-white shadow-md'
                : 'border-primary/20 bg-white text-slate-700 hover:border-primary/50'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-200">
        <button 
          onClick={() => setScreen('step1')}
          className="px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
        >
          Précédent
        </button>
        <button 
          onClick={() => setScreen('step3')}
          disabled={selected.length === 0}
          className="bg-primary text-white px-12 py-4 rounded-xl font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
