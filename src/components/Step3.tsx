import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Screen } from '../App';

export default function Step3({ setScreen }: { setScreen: (s: Screen) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { id: 'enfance', title: "L'enfance", desc: "Les premières années, l'insouciance et les racines.", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 'rencontre', title: "La rencontre", desc: "Le début d'une grande histoire d'amour.", img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 'defis', title: "Les défis", desc: "Surmonter l'adversité et grandir dans l'épreuve.", img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 'carriere', title: "La carrière", desc: "Ambitions, succès et parcours professionnel.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 'secrets', title: "Les secrets", desc: "Les confidences et les jardins secrets.", img: "https://images.unsplash.com/photo-1455390582262-044cdead2708?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 'conseils', title: "Ses conseils", desc: "La sagesse transmise aux générations futures.", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(o => o !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-6 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-bold text-primary mb-4 tracking-wider uppercase">
          <span>Étape 3 sur 4</span>
          <span>75%</span>
        </div>
        <div className="w-full bg-primary/10 h-2 rounded-full mb-8">
          <div className="bg-primary h-full rounded-full w-3/4"></div>
        </div>
        <p className="text-slate-500 mb-2">Choix des chapitres</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Si vous deviez choisir 3 chapitres essentiels de sa vie, lesquels seraient-ils?</h1>
        <p className="text-slate-600 text-lg mb-6">Sélectionnez les thèmes qui structureront le récit de cette vie unique.</p>
        
        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase">
          <Check className="w-4 h-4" />
          <span>{selected.length} / 3 SÉLECTIONNÉS</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 relative bg-white ${
                isSelected
                  ? 'border-primary shadow-md'
                  : 'border-transparent shadow-sm hover:shadow-md hover:border-primary/30'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center z-10">
                  <Check className="w-4 h-4" />
                </div>
              )}
              <div className="h-40 w-full overflow-hidden">
                <img src={opt.img} alt={opt.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{opt.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{opt.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-auto bg-primary/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-primary/10">
        <div className="flex items-center gap-3 text-slate-600 mb-4 sm:mb-0">
          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">i</div>
          <p>Vous pourrez modifier ces choix plus tard.</p>
        </div>
        <button 
          onClick={() => setScreen('loading')}
          disabled={selected.length === 0}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Voir mon projet
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
