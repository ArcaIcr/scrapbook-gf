import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REASONS = [
  "You always know how to make me smile, even on my worst days.",
  "Your laugh is my absolute favorite sound in the universe.",
  "You support my dreams and believe in me unconditionally.",
  "The way your eyes light up when you talk about things you love.",
  "Even with the distance between CDO and Bulacan, you make me feel so close to you."
];

export const LoveCards = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % REASONS.length);

  return (
    <div className="py-20 bg-romantic-50/50">
      <div className="max-w-md mx-auto px-6 text-center">
        <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Reasons I Love You</h3>
        <p className="text-slate-500 font-serif italic mb-10">Tap the card to read more...</p>
        
        <div 
          className="relative h-72 w-full cursor-pointer select-none" 
          style={{ perspective: 1000 }} 
          onClick={nextCard}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-white border-2 border-romantic-200 rounded-3xl shadow-xl flex items-center justify-center p-8"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <p className="text-xl md:text-2xl font-serif text-slate-700 leading-relaxed font-medium">
                "{REASONS[index]}"
              </p>
              
              <div className="absolute bottom-6 right-8 text-sm font-black text-slate-200 tracking-widest">
                {index + 1} / {REASONS.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
