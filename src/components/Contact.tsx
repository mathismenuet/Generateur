import React from 'react';
import { Calendar, ArrowRight, Lock } from 'lucide-react';
import { Screen } from '../App';

export default function Contact({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto w-full">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Donnons vie à ce projet.</h1>
        <p className="text-slate-600 text-lg max-w-md mx-auto">
          L'histoire de votre famille mérite d'être conservée. Discutons de votre idée lors d'un appel découverte offert de 20 minutes.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full mb-8">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Appel planifié !"); setScreen('landing'); }}>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Prénom</label>
            <input 
              type="text" 
              placeholder="Votre prénom" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Téléphone</label>
            <input 
              type="tel" 
              placeholder="06 00 00 00 00" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition-colors mt-4"
          >
            Planifier mon appel
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>

      <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl w-full text-center mb-8">
        <div className="flex justify-center gap-1 text-amber-500 mb-4">
          {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 italic mb-6">
          "Accompagnement incroyable... L'équipe a su poser les bonnes questions pour faire ressortir les souvenirs les plus précieux de mon grand-père."
        </p>
        <div className="flex items-center justify-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Alix" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold text-sm text-slate-900">Alix, 26 ans</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
        <Lock className="w-3 h-3" />
        Vos données sont sécurisées et ne seront jamais partagées.
      </div>
    </div>
  );
}
