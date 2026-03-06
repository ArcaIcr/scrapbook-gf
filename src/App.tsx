import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Timeline } from './components/Timeline';
import { WishWall } from './components/WishWall';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    setIsStarted(true);
    // Reference your Mundo.mp3 in the public folder
    audioRef.current = new Audio('/Mundo.mp3'); 
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.log("Playback failed:", err));
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="min-h-screen bg-romantic-50 selection:bg-romantic-200 overflow-x-hidden font-sans">
      <AnimatePresence>
        {!isStarted ? (
          /* --- LANDING PAGE --- */
          <motion.div 
            key="landing"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-screen flex items-center justify-center text-center px-4 bg-white"
          >
            <div className="space-y-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="inline-block"
              >
                <Heart className="w-24 h-24 text-romantic-600 fill-romantic-600 drop-shadow-lg" />
              </motion.div>
              
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase">
                  Happy 6th <span className="text-romantic-600">Month</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium italic max-w-lg mx-auto">
                  "Every month with you is a gift I never want to stop opening."
                </p>
              </div>

              <button 
                onClick={startExperience}
                className="px-14 py-5 bg-romantic-600 text-white rounded-full font-bold text-xl shadow-[0_15px_30px_-5px_rgba(225,29,72,0.4)] hover:bg-romantic-500 transform hover:-translate-y-1 transition-all active:scale-95"
              >
                Open Your Gift 🎁
              </button>
            </div>
          </motion.div>
        ) : (
          /* --- MAIN CONTENT --- */
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            {/* Audio Controls */}
            <button 
              onClick={toggleMute}
              className="fixed bottom-8 right-8 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-romantic-100 hover:scale-110 transition-transform active:scale-90"
            >
              {isMuted ? (
                <VolumeX className="text-slate-400 w-6 h-6" />
              ) : (
                <Volume2 className="text-romantic-600 w-6 h-6 animate-pulse" />
              )}
            </button>

            {/* Cinematic Header */}
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

            {/* Digital Scrapbook Section */}
            <section className="max-w-5xl mx-auto px-6 mb-32">
              <Timeline />
            </section>

            {/* Interactive Wish Wall Section */}
            <section className="bg-white border-t border-romantic-100 py-24">
              <div className="max-w-6xl mx-auto px-6">
                <WishWall />
              </div>
            </section>

            {/* Final Footer */}
            <footer className="bg-slate-50 py-20 text-center border-t border-slate-200">
               <Heart className="w-10 h-10 text-romantic-300 mx-auto mb-6 opacity-50" />
               <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">To many more months together</p>
               <h3 className="text-2xl font-black text-slate-900">Happy March 10, My Love! ❤️</h3>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;