import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Countdown } from '../components/Countdown';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  return (
    <motion.div 
      key="landing"
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="h-screen flex items-center justify-center text-center px-4 bg-white"
    >
      <div className="space-y-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="inline-block"
        >
          <Heart className="w-20 h-20 text-romantic-600 fill-romantic-600 drop-shadow-lg" />
        </motion.div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase">
              Happy 6th <span className="text-romantic-600">Month</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium italic">
              "Every day with you is my favorite day."
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-romantic-400">
              Countdown to March 10
            </p>
            <Countdown />
          </div>
        </div>

        <button 
          onClick={onStart}
          className="px-14 py-5 bg-romantic-600 text-white rounded-full font-bold text-xl shadow-[0_15px_30px_-5px_rgba(225,29,72,0.4)] hover:bg-romantic-500 transform hover:-translate-y-1 transition-all active:scale-95"
        >
          Open Your Gift 🎁
        </button>
      </div>
    </motion.div>
  );
};