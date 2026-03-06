// src/components/LetterModal.tsx
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const LetterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-[#fffcf2] w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl relative p-8 md:p-12 border-t-8 border-romantic-400"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X className="w-6 h-6 text-slate-400" />
        </button>

        <div className="prose prose-slate">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 italic">My Dearest...</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed font-serif">
            <p>I wanted to take a moment to write this specifically for you.</p>
            <p>Looking back at these 6 months, I'm reminded of why I started this journey with you. From our dates in CDO to the quiet moments we share...</p>
            {/* PASTE YOUR FULL LETTER HERE */}
            <p>Happy 6th monthsary. I love you!</p>
          </div>
          <p className="mt-8 text-right font-serif font-bold text-romantic-600">— Your Boyfriend</p>
        </div>
      </motion.div>
    </div>
  );
};