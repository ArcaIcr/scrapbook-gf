import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';

export const LDRMap = () => {
  return (
    <div className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-3">Our Connection 🌍</h3>
        <p className="text-slate-500 font-serif italic text-lg">Distance means so little when someone means so much.</p>
      </div>

      <div className="relative bg-white/50 backdrop-blur-sm p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-white flex items-center justify-between overflow-hidden">
        
        {/* Background decorative blob */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/50 via-transparent to-pink-50/50 pointer-events-none" />

        {/* CDO Pin */}
        <div className="flex flex-col items-center relative z-10 w-1/3">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4 shadow-sm border-4 border-white"
          >
            <MapPin className="w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
          <span className="font-bold text-slate-800 text-lg md:text-xl text-center">Cagayan de Oro</span>
          <span className="text-[10px] md:text-xs text-blue-400 font-black uppercase tracking-widest mt-2 bg-blue-50 px-3 py-1 rounded-full">You</span>
        </div>

        {/* Connecting Animated Line */}
        <div className="absolute left-1/4 right-1/4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
            <motion.line 
              x1="10%" y1="16" x2="90%" y2="16" 
              stroke="#f43f5e" 
              strokeWidth="4" 
              strokeDasharray="8 12"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <motion.div 
            initial={{ left: "10%" }}
            animate={{ left: "90%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
            className="absolute top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md text-romantic-500 border border-romantic-50"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
              <Heart className="w-5 h-5 md:w-6 md:h-6 fill-romantic-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bulacan Pin */}
        <div className="flex flex-col items-center relative z-10 w-1/3">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-4 shadow-sm border-4 border-white"
          >
            <MapPin className="w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
          <span className="font-bold text-slate-800 text-lg md:text-xl text-center">Bulacan</span>
          <span className="text-[10px] md:text-xs text-pink-400 font-black uppercase tracking-widest mt-2 bg-pink-50 px-3 py-1 rounded-full">Her</span>
        </div>

      </div>
    </div>
  );
};
