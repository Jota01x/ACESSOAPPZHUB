import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, ArrowRight } from 'lucide-react';
import { ACCESS_KEY } from '../types';

interface AccessGateProps {
  onUnlock: () => void;
}

export default function AccessGate({ onUnlock }: AccessGateProps) {
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key === ACCESS_KEY) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-brand-dark border border-white/10 rounded-2xl p-8 shadow-2xl shadow-brand-blue/10"
      >
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-brand-blue/20"
          >
            <Lock className="text-brand-blue w-8 h-8" />
          </motion.div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">APPZHUB</h1>
          <p className="text-white/60">Insira sua chave de acesso para entrar na área de membros</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Digite sua chave de acesso"
              className={`w-full bg-black border ${error ? 'border-red-500' : 'border-white/10 focus:border-brand-blue'} rounded-xl px-4 py-3 text-white outline-none transition-all placeholder:text-white/20`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">Chave incorreta. Tente novamente.</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            Acessar Agora
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 uppercase tracking-widest">Acesso Restrito</p>
        </div>
      </motion.div>
    </div>
  );
}
