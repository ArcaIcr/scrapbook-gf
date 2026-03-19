import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

// You can easily add more reasons here!
const REASONS = [
  "You always know how to make me smile, even on my worst days.",
  "Your laugh is my absolute favorite sound in the universe.",
  "You support my dreams and believe in me unconditionally.",
  "The way your eyes light up when you talk about things you love.",
  "Even with the distance between CDO and Bulacan, you make me feel so close to you."
];

export const LoveCards = () => {
  const [cards, setCards] = useState(REASONS);

  // When a user drags a card far enough, throw it away and recycle it to the bottom
  const handleDragEnd = (_: any, info: any) => {
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
      setCards(prev => {
        const newCards = [...prev];
        const thrownCard = newCards.shift();
        if (thrownCard) newCards.push(thrownCard);
        return newCards;
      });
    }
  };

  return (
    <div className="py-24 bg-romantic-50/50 overflow-hidden flex flex-col items-center">
      <h3 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-2 text-center">Reasons I Love You</h3>
      <p className="text-slate-500 font-serif italic mb-12 text-center">Swipe or drag the top card to read them all...</p>
      
      <div className="relative w-80 h-[400px] flex items-center justify-center perspective-[1000px]">
        <AnimatePresence>
          {cards.map((reason, index) => {
            const isTop = index === 0;
            return (
              <motion.div
                key={reason} // The reason string acts as a unique key for layout animation
                layout
                className={`absolute w-full h-full bg-white rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-8 border border-romantic-100 ${isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
                style={{ 
                  zIndex: cards.length - index,
                  transformOrigin: "bottom"
                }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ 
                  scale: 1 - index * 0.05, 
                  y: index * 20,
                  rotateZ: index % 2 === 0 ? index * 2 : -index * 3,
                  opacity: 1 - index * 0.15 
                }}
                exit={{ 
                  x: 300, 
                  opacity: 0, 
                  scale: 0.5, 
                  rotateZ: 45,
                  transition: { duration: 0.2 }
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.8}
                onDragEnd={isTop ? handleDragEnd : undefined}
                whileDrag={{ scale: 1.05, rotateZ: 5, cursor: "grabbing" }}
              >
                <Heart className={`w-12 h-12 mb-8 drop-shadow-md ${isTop ? 'text-romantic-500 animate-pulse' : 'text-romantic-200'}`} />
                <p className="text-2xl font-serif text-slate-700 leading-relaxed font-medium text-center">
                  "{reason}"
                </p>
                
                {isTop && (
                  <div className="absolute bottom-6 flex items-center gap-2 opacity-50">
                    <motion.div
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xs uppercase tracking-widest font-black text-slate-400"
                    >
                      ← Swipe →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
