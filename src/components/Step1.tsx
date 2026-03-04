import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Users } from 'lucide-react';
import { Screen } from '../App';

export default function Step1({ setScreen }: { setScreen: (s: Screen) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: 'gm', title: 'Ma Grand-mère', desc: "Honorer son parcours, sa sagesse et les souvenirs précieux qu'elle a transmis à travers les générations.", icon: <User className="w-6 h-6" /> },
    { id: 'gp', title: 'Mon Grand-père', desc: "Raconter ses aventures, son héritage et les leçons de vie qui ont forgé l'identité de votre famille.", icon: <User className="w-6 h-6" /> },
    { id: 'parents', title: 'Mes Parents', desc: "Célébrer leur histoire commune, leur rencontre et le foyer qu'ils ont bâti ensemble au fil des ans.", icon: <Users className="w-6 h-6" /> },
    { id: 'autre', title: 'Un autre proche', desc: "Personnaliser le lien pour un oncle, une tante, un ami ou toute personne dont l'histoire mérite d'être écrite.", icon: <User className="w-6 h-6" /> },
  ];

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center justify-between text-sm font-bold text-primary mb-4 tracking-wider uppercase">
          <span>Étape 1 sur 4</span>
          <span>25%</span>
        </div>
        <div className="w-full bg-primary/10 h-2 rounded-full mb-8">
          <div className="bg-primary h-full rounded-full w-1/4"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Qui est le héros ?</h1>
        <p className="text-slate-600 text-lg">Sélectionnez la personne dont vous souhaitez raconter l'histoire extraordinaire.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`text-left p-8 rounded-2xl border-2 transition-all duration-200 ${
              selected === opt.id 
                ? 'border-primary bg-primary/5 shadow-md' 
                : 'border-transparent bg-white shadow-sm hover:shadow-md hover:border-primary/30'
            }`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
              selected === opt.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
            }`}>
              {opt.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{opt.title}</h3>
            <p className="text-slate-500 leading-relaxed">{opt.desc}</p>
          </button>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-200">
        <button 
          onClick={() => setScreen('landing')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </button>
        <button 
          onClick={() => setScreen('step2')}
          disabled={!selected}
          className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuer l'histoire
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
