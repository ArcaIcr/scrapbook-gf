import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { WishWall } from '../components/WishWall';

export const MainContent = () => {
  return (
    <motion.div 
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <header className="pt-32 pb-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
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

      <section className="max-w-5xl mx-auto px-6 mb-32">
        <Timeline />
      </section>

      <section className="bg-white border-t border-romantic-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <WishWall />
        </div>
      </section>

      <footer className="bg-slate-50 py-20 text-center border-t border-slate-200">
         <Heart className="w-10 h-10 text-romantic-300 mx-auto mb-6 opacity-50" />
         <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">To many more months together</p>
         <h3 className="text-2xl font-black text-slate-900 tracking-tight">Happy March 10, My Love! ❤️</h3>
      </footer>
    </motion.div>
  );
};