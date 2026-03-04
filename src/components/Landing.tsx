import React from 'react';
import { BookOpen, MessageSquare, Clapperboard, ShieldCheck, Quote } from 'lucide-react';
import { Screen } from '../App';

export default function Landing({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white">
        <div className="flex items-center gap-3">
          <BookOpen className="text-primary w-6 h-6" />
          <h1 className="text-xl font-bold tracking-tight">Mémoire de Famille</h1>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-primary transition-colors">Notre Concept</a>
          <a href="#" className="hover:text-primary transition-colors">Exemples</a>
          <a href="#" className="hover:text-primary transition-colors">Tarifs</a>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-hover transition-colors">
            Se connecter
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-white flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Posez-leur vos questions avant qu'il ne soit trop tard.
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl">
            Créez le documentaire de votre histoire familiale. Découvrez quels souvenirs précieux vous devriez sauvegarder, et comment nous pouvons le réaliser ensemble.
          </p>
          <button 
            onClick={() => setScreen('step1')}
            className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-hover transition-colors shadow-lg"
          >
            Commencer mon projet familial
          </button>
        </div>
      </section>

      {/* Approche */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <p className="text-primary font-medium mb-2 italic font-serif">Notre approche</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Une approche humaine et technologique</h3>
          <p className="text-slate-600 max-w-2xl text-lg">
            Nous vous accompagnons dans la création d'un héritage visuel unique, mêlant expertise narrative et qualité cinématographique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3">Entretiens Guidés</h4>
            <p className="text-slate-600 leading-relaxed">
              Des questionnaires conçus par des historiens et psychologues pour révéler les anecdotes les plus précieuses.
            </p>
          </div>
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Clapperboard className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3">Montage Professionnel</h4>
            <p className="text-slate-600 leading-relaxed">
              Une mise en scène élégante, intégrant vos photos d'archives pour un rendu véritablement cinématographique.
            </p>
          </div>
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3">Archives Sécurisées</h4>
            <p className="text-slate-600 leading-relaxed">
              Vos souvenirs sont conservés sur des serveurs sécurisés et partagés uniquement avec les personnes de votre choix.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-bg-light px-6 text-center flex flex-col items-center">
        <Quote className="w-12 h-12 text-primary/40 mb-8" />
        <p className="text-2xl md:text-4xl font-serif italic text-slate-800 max-w-4xl leading-relaxed mb-12">
          "C'est le plus beau cadeau que j'ai pu faire à mes enfants. Voir mon père raconter sa jeunesse avec autant de détails est un trésor inestimable."
        </p>
        <div className="flex flex-col items-center">
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="Marie L." 
            className="w-16 h-16 rounded-full object-cover mb-4 shadow-md"
          />
          <p className="font-bold text-slate-900">Marie L., Bordeaux</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Prêt à sauvegarder vos souvenirs ?</h3>
        <p className="text-lg text-slate-600 mb-10">
          Rejoignez les centaines de familles qui ont déjà franchi le pas pour préserver leur héritage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setScreen('step1')}
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-hover transition-colors"
          >
            Découvrir nos offres
          </button>
          <button className="w-full sm:w-auto bg-white border border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/5 transition-colors">
            Comment ça marche ?
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151A22] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-white w-6 h-6" />
              <h4 className="text-xl font-bold">Mémoire de Famille</h4>
            </div>
            <p className="text-slate-400 max-w-xs">
              Immortalisez les histoires de ceux que vous aimez pour les générations futures.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-lg">Navigation</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concept</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-lg">Contact</h5>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center">✉</span>
                contact@memoiredefamille.fr
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center">📞</span>
                01 23 45 67 89
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© 2024 Mémoire de Famille. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
