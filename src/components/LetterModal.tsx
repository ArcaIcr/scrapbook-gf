import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export const LetterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<'sealed' | 'opening' | 'reading'>('sealed');
  const [displayedText, setDisplayedText] = useState("");
  
  const fullText = `My Dearest Kiaa,

I’ve been sitting here trying to wrap my head around the fact that it’s already been six months. In some ways, it feels like we’ve lived a lifetime in this half-year, yet the time has gone by in the blink of an eye. They say time flies when you’re happy, and these past six months have been the happiest of my life.

I’ll be honest with you, I never imagined that one person could become this vital to my world. You’ve moved from being someone I was excited to get to know, to being the person I want to share every single thought, joke, and dream with. You are, without a doubt, the best thing that has ever happened to me.

I caught myself thinking today about who I was before you. If my past self could catch a glimpse of us right now, if he could see the way you smile at me or the way we just fit together—I know he would be so incredibly envious. He wouldn’t believe that he’d eventually get to be the lucky guy holding your hand. You’ve brought a light into my life that I didn’t even realize was missing until you arrived.

As much as I’m reflecting on the past six months, I’m even more focused on what’s ahead. I am counting down the days until June. I’m so incredibly excited to see you then and finally turn all those 'one day' plans into reality. Whether it’s the big adventures we’ve talked about or just the simple things we want to do together, I can’t wait to experience it all by your side.

Thank you for these first six months. Thank you for being my person, my best friend, and my greatest joy. I love you more than I can put into words, and I’m so proud to be your partner.
Happy 6-month anniversary, my love.

"If I had a flower for every time I thought of you... I could walk through my garden forever." — Alfred Tennyson


Yours truly,
Ken`;

  // Reset when opened/closed
  useEffect(() => {
    if (isOpen) {
      setStep('sealed');
      setDisplayedText("");
    }
  }, [isOpen]);

  // Handle typing effect only when step is 'reading'
  useEffect(() => {
    if (step === 'reading') {
      let currentLength = 0;
      setDisplayedText("");
      const interval = setInterval(() => {
        currentLength++;
        setDisplayedText(fullText.slice(0, currentLength));
        if (currentLength >= fullText.length) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    }
  }, [step, fullText]);

  const handleOpen = () => {
    setStep('opening');
    setTimeout(() => {
      setStep('reading');
    }, 1500); // Wait 1.5s for the envelope opening animation to finish
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm perspective-1000 flex items-center justify-center">
      
      {/* THE ENVELOPE (Visible in sealed and opening states) */}
      <AnimatePresence>
        {(step === 'sealed' || step === 'opening') && (
          <motion.div 
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute w-[300px] h-[200px] md:w-[400px] md:h-[260px] cursor-pointer"
            onClick={step === 'sealed' ? handleOpen : undefined}
          >
            {/* Back of envelope (pocket) */}
            <div className="absolute inset-0 bg-rose-200 rounded-lg shadow-2xl overflow-hidden">
               {/* The Letter inside, sliding up during 'opening' */}
               <motion.div 
                 initial={{ y: 0 }}
                 animate={{ y: step === 'opening' ? -150 : 0 }}
                 transition={{ duration: 0.8, delay: 0.4, ease: "backInOut" }}
                 className="absolute inset-x-4 top-4 bottom-0 bg-[#fffcf2] rounded-t-xl opacity-90"
                 style={{ boxShadow: "0 -4px 10px rgba(0,0,0,0.1)" }}
               />
               {/* Front of envelope pockets cut out using SVG */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
                 {/* Side flaps */}
                 <polygon points="0,0 0,100 100,100 100,0 50,55" fill="#fecdd3" stroke="#fda4af" strokeWidth="0.5" />
                 {/* Bottom flap slightly overlapping */}
                 <polygon points="0,100 50,55 100,100" fill="#fda4af" />
               </svg>
            </div>

            {/* Top Flap (Opens backwards) */}
            <motion.div 
               initial={{ rotateX: 0, zIndex: 10 }}
               animate={{ rotateX: step === 'opening' ? 180 : 0, zIndex: step === 'opening' ? 0 : 10 }}
               transition={{ duration: 0.6 }}
               className="absolute top-0 left-0 w-full h-[60%] origin-top"
               style={{ backfaceVisibility: 'hidden' }}
            >
               {/* Triangle flap SVG */}
               <svg className="absolute inset-0 w-full h-full filter drop-shadow-sm" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <polygon points="0,0 100,0 50,100" fill="#ffe4e6" stroke="#fecdd3" strokeWidth="1" />
               </svg>
               
               {/* The Wax Seal */}
               <motion.div 
                 animate={{ scale: step === 'opening' ? 0 : [1, 1.05, 1] }}
                 transition={{ repeat: step === 'sealed' ? Infinity : 0, duration: 2 }}
                 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-700/50 cursor-pointer"
               >
                 <Heart className="w-6 h-6 text-white/90 fill-white/90" />
               </motion.div>
            </motion.div>
            
            {step === 'sealed' && (
              <p className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/80 font-serif italic text-sm text-center w-full animate-pulse">
                Tap the wax seal to open
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE ACTUAL LETTER (Visible in reading state) */}
      <AnimatePresence>
        {step === 'reading' && (
          <motion.div 
            key="letter"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bg-[#fffcf2] w-[90%] max-w-lg max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-romantic-400 z-50"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-200/50 rounded-full transition-colors cursor-pointer">
              <X className="w-6 h-6 text-slate-400" />
            </button>

            <div className="prose prose-slate">
              <div className="space-y-4 text-slate-700 leading-relaxed font-serif whitespace-pre-wrap min-h-[300px]">
                {displayedText}
                {displayedText.length < fullText.length && (
                  <span className="animate-pulse inline-block ml-1">|</span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};