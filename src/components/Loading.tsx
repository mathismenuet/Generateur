import React, { useEffect, useState } from 'react';
import { Hourglass, PenTool, Brain, Clock, Info } from 'lucide-react';
import { Screen } from '../App';

export default function Loading({ setScreen }: { setScreen: (s: Screen) => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setScreen('result'), 500);
          return 100;
        }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [setScreen]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto w-full">
      <div className="mb-12 relative">
        <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center">
          <Hourglass className="w-10 h-10 text-primary animate-pulse" />
        </div>
        <div 
          className="absolute inset-0 w-24 h-24 rounded-full border-t-4 border-primary animate-spin" 
          style={{ animationDuration: '2s' }}
        ></div>
      </div>

      <div className="text-center w-full mb-12">
        <h2 className="text-3xl font-bold mb-3">Analyse de vos choix...</h2>
        <p className="text-slate-500 text-lg mb-8">Création de votre trame narrative...</p>
        
        <div className="w-full bg-primary/10 h-2.5 rounded-full mb-3 overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-sm font-bold">
          <span className="text-slate-500">Progression de la rédaction</span>
          <span className="text-primary">{progress}%</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full mb-12 opacity-70">
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 text-center">
          <PenTool className="w-6 h-6 text-primary mb-3" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Style Littéraire</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-primary/30 text-center">
          <Brain className="w-6 h-6 text-primary mb-3" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Analyse Psychologique</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 text-center">
          <Clock className="w-6 h-6 text-primary mb-3" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Chronologie</span>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 w-full flex gap-4 text-left">
        <div className="bg-primary/10 p-2 rounded-lg h-fit">
          <Info className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-1">Note du rédacteur</h4>
          <p className="text-sm text-slate-600">Nous assemblons les pièces de votre vie pour créer un récit captivant et authentique.</p>
        </div>
      </div>
    </div>
  );
}
