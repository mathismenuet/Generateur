import React, { useState } from 'react';
import Landing from './components/Landing';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Loading from './components/Loading';
import Result from './components/Result';
import Contact from './components/Contact';
import WizardHeader from './components/WizardHeader';

export type Screen = 'landing' | 'step1' | 'step2' | 'step3' | 'loading' | 'result' | 'contact';

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');

  return (
    <div className="min-h-screen flex flex-col">
      {screen !== 'landing' && <WizardHeader setScreen={setScreen} />}
      <main className="flex-1 flex flex-col">
        {screen === 'landing' && <Landing setScreen={setScreen} />}
        {screen === 'step1' && <Step1 setScreen={setScreen} />}
        {screen === 'step2' && <Step2 setScreen={setScreen} />}
        {screen === 'step3' && <Step3 setScreen={setScreen} />}
        {screen === 'loading' && <Loading setScreen={setScreen} />}
        {screen === 'result' && <Result setScreen={setScreen} />}
        {screen === 'contact' && <Contact setScreen={setScreen} />}
      </main>
    </div>
  );
}
