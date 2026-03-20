import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Countdown } from '../components/Countdown';
import confetti from 'canvas-confetti';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger a massive, majestic confetti explosion
    const duration = 2500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#e11d48', '#ffffff', '#fecdd3']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#e11d48', '#ffffff', '#fecdd3']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // After the lid flies off and confetti blasts for 1.5 seconds, start the site!
    setTimeout(() => {
      onStart();
    }, 1500);
  };

  return (
    // The massive exit transition scales the whole screen towards the camera!
    <motion.div 
      exit={{ opacity: 0, scale: 1.5, filter: 'blur(15px)' }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center text-center px-4 bg-romantic-50 z-50 overflow-hidden"
    >
      {/* Subtle radial glow background behind everything */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-16 w-full max-w-md mt-10">
        
        {/* Intro Text */}
        <motion.div 
          animate={isOpening ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter"
          >
            A special gift for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-romantic-500 to-rose-400 font-serif italic pr-2">Kiaa</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-sm md:text-base uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 drop-shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-romantic-400" />
            Tap to open
            <Sparkles className="w-4 h-4 text-romantic-400" />
          </motion.p>
        </motion.div>

        {/* The Interactive 3D Gift Box */}
        <motion.button
          onClick={handleOpen}
          whileHover={!isOpening ? { scale: 1.05, rotate: [-2, 2, -2, 2, 0] } : undefined}
          whileTap={!isOpening ? { scale: 0.95 } : undefined}
          className="relative group outline-none cursor-pointer"
        >
           {/* Glowing aura behind box */}
           <div className="absolute inset-0 bg-romantic-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
           
           <div className="relative w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-end">
              
              {/* --- TOP LID --- */}
              <motion.div 
                className="absolute z-20 top-8 md:top-4 w-40 md:w-56 h-14 md:h-20 bg-romantic-600 rounded-md border-b-8 border-romantic-700 shadow-[0_15px_30px_rgba(0,0,0,0.2)] flex justify-center"
                animate={isOpening ? 
                  { y: -300, opacity: 0, rotate: 25, scale: 1.2 } : 
                  { y: [0, -5, 0] }
                }
                transition={isOpening ? { duration: 1, ease: "easeOut" } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Vertical Ribbon Wrap */}
                <div className="w-8 md:w-10 h-full bg-white opacity-95 shadow-sm" />
                {/* Decorative Ribbon Bows */}
                <div className="absolute -top-10 md:-top-12 flex gap-1">
                  <div className="w-14 h-12 md:w-16 md:h-14 border-4 md:border-[6px] border-white rounded-full bg-romantic-500 transform -rotate-[20deg] translate-x-2 shadow-md" />
                  <div className="w-14 h-12 md:w-16 md:h-14 border-4 md:border-[6px] border-white rounded-full bg-romantic-500 transform rotate-[20deg] -translate-x-2 shadow-md" />
                </div>
              </motion.div>

              {/* --- BOTTOM BOX BASE --- */}
              <motion.div 
                className="relative z-10 w-36 md:w-52 h-32 md:h-44 bg-romantic-500 rounded-b-xl shadow-2xl flex justify-center overflow-hidden border-t-2 border-romantic-400"
                animate={isOpening ? { opacity: 0, scale: 2, y: 100 } : { opacity: 1, scale: 1 }}
                transition={isOpening ? { duration: 0.8, delay: 0.3 } : { duration: 0 }}
              >
                {/* Vertical Ribbon */}
                <div className="w-8 md:w-10 h-full bg-white opacity-95 shadow-inner" />
                {/* Horizontal Ribbon */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 md:h-10 bg-white opacity-95 shadow-inner" />
                
                {/* The glowing light explosion from inside the box when opened */}
                {isOpening && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 5 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full blur-[20px] shadow-[0_0_100px_rgba(255,255,255,1)] z-30 pointer-events-none"
                  />
                )}
              </motion.div>

           </div>
        </motion.button>

        {/* Countdown Timer */}
        <motion.div 
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8"
        >
          <Countdown />
        </motion.div>

      </div>
    </motion.div>
  );
};