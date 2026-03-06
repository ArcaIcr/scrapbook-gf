// src/sections/Hero.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';
import { Countdown } from '../components/Countdown';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleEntry = () => {
    if (password === '091025') { // Your anniversary date
      onStart();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <motion.div 
      exit={{ opacity: 0, y: -100 }}
      className="h-screen flex items-center justify-center text-center px-4 bg-white"
    >
      <div className="space-y-8 w-full max-w-md">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
          <Heart className="w-16 h-16 text-romantic-600 fill-romantic-600 mx-auto" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Private Access</h1>
          <p className="text-slate-500 text-sm">Enter our special date to unlock your gift</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input 
              type="password"
              placeholder="DDMMYY"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-6 py-4 bg-slate-50 border-2 rounded-2xl outline-none transition-all ${error ? 'border-red-400 animate-shake' : 'border-romantic-100 focus:border-romantic-400'}`}
            />
            <Lock className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
          </div>
          
          <button 
            onClick={handleEntry}
            className="w-full py-4 bg-romantic-600 text-white rounded-2xl font-bold shadow-lg hover:bg-romantic-500 transition-all"
          >
            Unlock Memories 🔑
          </button>
        </div>

        <div className="pt-8">
          <Countdown />
        </div>
      </div>
    </motion.div>
  );
};