import React from 'react';
import { CheckCircle2, Calendar, Video, Film } from 'lucide-react';
import { Screen } from '../App';

export default function Result({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-12">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
          <CheckCircle2 className="w-4 h-4" />
          Synthèse du projet
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Votre Documentaire Familial est dessiné.</h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          Basé sur vos souvenirs d'enfance en Bretagne, votre carrière d'artisan et votre souhait d'un ton nostalgique mais inspirant. Nous avons tous les éléments pour créer votre héritage.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-primary tracking-wider uppercase mb-2">Style Visuel</p>
          <p className="text-lg font-semibold">Cinématique & Sépia</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-primary tracking-wider uppercase mb-2">Durée Estimée</p>
          <p className="text-lg font-semibold">45 à 60 minutes</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-primary tracking-wider uppercase mb-2">Interlocuteurs</p>
          <p className="text-lg font-semibold">Vous + 3 proches</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Vous avez l'idée. Je m'occupe de la capturer.</h2>
        <p className="text-slate-600 text-lg mb-8">Un processus simple et humain pour donner vie à votre récit.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Préparation</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Planification de vos entretiens, recherche iconographique et sélection des thèmes clés de votre vie.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tournage</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Capture de vos récits lors d'une session dirigée avec soin, chez vous ou en studio, pour une ambiance authentique.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Le Film</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Montage final, étalonnage et livraison de votre héritage familial sur support physique et numérique.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-200">
        <button 
          onClick={() => setScreen('contact')}
          className="w-full sm:w-auto flex-1 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-hover transition-colors text-center"
        >
          Lancer la production de mon projet
        </button>
        <button 
          onClick={() => setScreen('step1')}
          className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-colors text-center"
        >
          Modifier mes choix
        </button>
      </div>
    </div>
  );
}
