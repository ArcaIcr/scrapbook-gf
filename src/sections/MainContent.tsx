import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { WishWall } from '../components/WishWall';
import { LetterModal } from '../components/LetterModal';

export const MainContent = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <motion.div 
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* --- CINEMATIC HEADER --- */}
      <header className="pt-32 pb-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-romantic-100 text-romantic-700 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6"
        >
          <Sparkles className="w-3 h-3" />
          Our Story Since Sept 2025
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-linear-to-r from-romantic-600 to-rose-400">Journey</span> So Far
        </h2>
        
        <div className="w-24 h-1 bg-romantic-600 mx-auto rounded-full" />
      </header>

      {/* --- DIGITAL SCRAPBOOK (TIMELINE) --- */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <Timeline />
      </section>

      {/* --- INTERACTIVE WISH WALL --- */}
      <section className="bg-white border-t border-romantic-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <WishWall />
        </div>
      </section>

      {/* --- SECRET LETTER CALL TO ACTION --- */}
      <section className="py-20 text-center bg-romantic-50/50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button 
            onClick={() => setIsLetterOpen(true)}
            className="group relative px-10 py-4 bg-white border-2 border-romantic-200 text-romantic-600 rounded-full font-bold shadow-sm hover:shadow-md hover:border-romantic-400 transition-all cursor-pointer"
          >
            <span className="flex items-center gap-3">
              Read my secret letter for you ✉️
            </span>
          </button>
        </motion.div>
        <p className="mt-4 text-slate-400 text-sm italic">Click to open a special note</p>
      </section>

      {/* --- FINAL FOOTER --- */}
      <footer className="bg-white py-24 text-center border-t border-slate-100">
         <Heart className="w-10 h-10 text-romantic-200 mx-auto mb-6 opacity-60" />
         <div className="space-y-2">
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
              To many more months together
            </p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Happy March 10, My Love! ❤️
            </h3>
         </div>
      </footer>

      {/* --- MODAL COMPONENT --- */}
      <LetterModal 
        isOpen={isLetterOpen} 
        onClose={() => setIsLetterOpen(false)} 
      />
    </motion.div>
  );
};