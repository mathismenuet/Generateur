import React from 'react';
import { BookOpen, X } from 'lucide-react';
import { Screen } from '../App';

export default function WizardHeader({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-bg-light border-b border-primary/10">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen('landing')}>
        <BookOpen className="text-primary w-6 h-6" />
        <h2 className="text-lg font-bold tracking-tight">Générateur de Biographie</h2>
      </div>
      <button 
        onClick={() => setScreen('landing')}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </header>
  );
}
