import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NightModeToggle = ({ isNightMode, toggleNightMode }: { isNightMode: boolean; toggleNightMode: () => void }) => {
  return (
    <button 
      onClick={toggleNightMode} 
      className={`fixed top-6 right-6 z-[60] p-3 backdrop-blur-md rounded-full shadow-lg border hover:scale-110 transition-all cursor-pointer ${isNightMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-romantic-100'}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isNightMode ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isNightMode ? <Sun className="w-5 h-5 text-yellow-400 fill-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-500 fill-indigo-100" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
