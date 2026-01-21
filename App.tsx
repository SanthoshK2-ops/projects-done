
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Bearers from './components/Bearers';
import Achievements from './components/Achievements';
import Showcase from './components/Showcase';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const RegistrationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <div className="bg-[#061a33] border border-[#0C2C55] w-full max-w-lg rounded-[2.5rem] p-10 relative z-10 shadow-2xl animate-modal-in overflow-hidden">
        {/* Modal background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#0C2C55]/40 blur-3xl rounded-full" />
        
        <button onClick={onClose} className="absolute top-8 right-8 text-blue-100/40 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-4xl font-black text-white mb-4 relative z-10">Join the <span className="text-blue-400">Evolution.</span></h2>
        <p className="text-blue-100/50 mb-8 font-medium relative z-10">Enter your details to register for DATRONIX '26. A confirmation link will be sent to your email.</p>
        
        <form className="space-y-4 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Registration simulation successful!'); onClose(); }}>
          <input type="text" placeholder="Full Name" required className="w-full bg-[#0C2C55]/20 border border-blue-900/50 rounded-2xl p-5 text-white placeholder-blue-100/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
          <input type="email" placeholder="Email Address" required className="w-full bg-[#0C2C55]/20 border border-blue-900/50 rounded-2xl p-5 text-white placeholder-blue-100/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
          <select className="w-full bg-[#0C2C55]/20 border border-blue-900/50 rounded-2xl p-5 text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none">
            <option>Select Primary Event</option>
            <option>Code-X Hackathon</option>
            <option>Robo Wars</option>
            <option>UI/UX Masterclass</option>
          </select>
          <button type="submit" className="w-full py-5 bg-[#0C2C55] hover:bg-[#16437d] border border-blue-400/20 text-white rounded-2xl font-black text-lg shadow-xl transition-all active:scale-95 mt-4">
            CONFIRM REGISTRATION
          </button>
        </form>
      </div>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenReg = () => setIsRegModalOpen(true);
    window.addEventListener('open-reg', handleOpenReg);
    return () => window.removeEventListener('open-reg', handleOpenReg);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#0C2C55]/50 relative bg-[#040d1a]">
      <Navbar onRegisterClick={() => setIsRegModalOpen(true)} />
      <main>
        <Hero onRegisterClick={() => setIsRegModalOpen(true)} />
        <About />
        <Events />
        <Showcase />
        <Bearers />
        <Achievements />
        <AIAssistant />
      </main>
      <Footer />
      
      <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
      
      {/* Background Decorative Blur using #0C2C55 */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-20%] w-[60%] aspect-square bg-[#0C2C55]/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-[#0C2C55]/15 blur-[180px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>
    </div>
  );
}

export default App;
