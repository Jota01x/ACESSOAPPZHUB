import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, LayoutGrid, Mail, ExternalLink, ArrowDown, CheckCircle2 } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-brand-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
              <LayoutGrid className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              APPZHUB
            </span>
          </div>
          
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-dark border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue" />
          
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-brand-blue/10 rounded-2xl flex items-center justify-center border border-brand-blue/20">
              <CheckCircle2 className="text-brand-blue w-10 h-10" />
            </div>
          </div>

          <h2 className="text-5xl font-display font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Seu acesso foi liberado!
          </h2>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl mb-12">
            <span className="text-white/60 font-medium text-lg">Sua chave de acesso:</span>
            <span className="text-4xl font-mono font-bold text-brand-blue tracking-[0.2em]">4080</span>
          </div>

          <p className="text-white/40 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Utilize a chave acima para realizar suas configurações. 
            Clique no botão abaixo para prosseguir.
          </p>

          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-brand-blue mb-4"
            >
              <ArrowDown className="w-12 h-12" />
            </motion.div>

            <a 
              href="https://appzhub.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-10 py-5 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-blue/25"
            >
              <ExternalLink className="w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">Ir para APPZHUB</span>
            </a>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-transparent border border-brand-blue/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold mb-2">Precisa de ajuda?</h4>
              <p className="text-white/60">Nosso suporte está disponível de segunda a sexta para te auxiliar.</p>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setShowSupport(!showSupport)}
                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                {showSupport ? <Mail className="w-4 h-4" /> : null}
                {showSupport ? 'rodrigosuporteapp@gmail.com' : 'Falar com Suporte'}
              </button>
              
              <AnimatePresence>
                {showSupport && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-brand-blue font-mono text-sm text-center"
                  >
                    Clique acima para copiar ou enviar um e-mail
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
