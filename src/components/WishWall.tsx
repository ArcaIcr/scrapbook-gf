import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

const DEFAULT_WISHES = [
  { id: 1, text: "Samgyupsal Date 🍖", color: "bg-yellow-100", rotate: -6 },
  { id: 2, text: "Beach Trip in MisOr 🏖️", color: "bg-blue-100", rotate: 8 },
  { id: 3, text: "Movie Marathon 🍿", color: "bg-purple-100", rotate: -4 },
  { id: 4, text: "Coffee Study Date ☕", color: "bg-orange-100", rotate: 5 },
  { id: 5, text: "Picnic Date 🧺", color: "bg-pink-100", rotate: -8 },
  { id: 6, text: "Late Night Drive 🚗", color: "bg-emerald-100", rotate: 4 },
];

const COLORS = ["bg-yellow-100", "bg-blue-100", "bg-purple-100", "bg-orange-100", "bg-pink-100", "bg-emerald-100"];

export const WishWall = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newText, setNewText] = useState("");

  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('anniversary-wishes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_WISHES;
      }
    }
    return DEFAULT_WISHES;
  });

  useEffect(() => {
    localStorage.setItem('anniversary-wishes', JSON.stringify(wishes));
  }, [wishes]);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;
    
    const newWish = {
      id: Date.now(),
      text: newText.trim(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: (Math.random() * 20) - 10,
    };
    
    setWishes([...wishes, newWish]);
    setNewText("");
    setIsAdding(false);
  };

  const removeWish = (id: number) => {
    setWishes(wishes.filter(w => w.id !== id));
  };

  return (
    <div className="py-20 overflow-hidden relative">
      <div className="text-center mb-10 relative z-10">
        <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Our Future Dates ✨</h3>
        <p className="text-slate-500 font-serif italic text-sm md:text-base mb-6">Drag the sticky notes around, or pin a new one!</p>
        
        {!isAdding ? (
          <button 
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-romantic-600 text-white rounded-full font-bold shadow-md hover:bg-romantic-500 hover:scale-105 transition-all cursor-pointer"
          >
            <Plus className="w-5 h-5" /> Add a Date
          </button>
        ) : (
          <form onSubmit={handleAddWish} className="inline-flex items-center gap-2 bg-white p-2 rounded-full shadow-lg border border-romantic-100 w-full max-w-sm mx-auto">
            <input 
              autoFocus
              type="text"
              placeholder="Type a fun date..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="flex-1 px-4 py-2 outline-none text-slate-700 bg-transparent"
              maxLength={40}
            />
            <button type="submit" className="p-2 bg-romantic-600 text-white rounded-full hover:bg-romantic-500 transition-colors cursor-pointer">
              <Plus className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => setIsAdding(false)} className="p-2 bg-slate-100 text-slate-400 rounded-full hover:bg-slate-200 hover:text-slate-600 transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
      
      <div 
        ref={containerRef} 
        className="relative max-w-5xl mx-auto min-h-[500px] border-4 border-dashed border-romantic-200/50 rounded-3xl bg-romantic-50/30 p-8 flex flex-wrap justify-center items-center gap-6 md:gap-12"
      >
        <AnimatePresence>
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              layout
              drag
              dragConstraints={containerRef}
              initial={{ scale: 0, rotate: wish.rotate }}
              animate={{ scale: 1, rotate: wish.rotate }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
              whileDrag={{ scale: 1.2, zIndex: 100, rotate: 0, boxShadow: "0px 15px 25px rgba(0,0,0,0.15)" }}
              className={`${wish.color} p-6 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center shadow-md border border-black/5 text-center font-bold text-black/70 cursor-grab active:cursor-grabbing relative group`}
              style={{ touchAction: "none" }}
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400/90 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-red-500/30" />
              
              <button 
                onClick={() => removeWish(wish.id)}
                className="absolute top-2 right-2 p-1 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/20 text-black/50 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
              
              <span className="text-base md:text-lg leading-tight mt-2">{wish.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};