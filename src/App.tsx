import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Volume2, VolumeX } from 'lucide-react'; // Removed unused 'Music'
import { Timeline } from './components/Timeline';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    setIsStarted(true);
    // Matching your exact filename in public folder
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
    <main className="min-h-screen bg-romantic-50 selection:bg-romantic-200 overflow-x-hidden">
      <AnimatePresence>
        {!isStarted ? (
          <motion.div 
            key="landing"
            exit={{ opacity: 0, scale: 0.9 }}
            className="h-screen flex items-center justify-center text-center px-4 bg-white"
          >
            <div className="space-y-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block"
              >
                <Heart className="w-20 h-20 text-romantic-600 fill-romantic-600 shadow-sm" />
              </motion.div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter uppercase">
                  Happy 6th <span className="text-romantic-600">Month</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium italic">
                  "Every day with you is my favorite day."
                </p>
              </div>

              <button 
                onClick={startExperience}
                className="px-12 py-5 bg-romantic-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-romantic-500 transform hover:-translate-y-1 transition-all active:scale-95"
              >
                Open Your Gift 🎁
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button 
              onClick={toggleMute}
              className="fixed bottom-6 right-6 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-romantic-100"
            >
              {isMuted ? <VolumeX className="text-slate-400" /> : <Volume2 className="text-romantic-600 animate-pulse" />}
            </button>

            <header className="pt-24 pb-12 text-center px-4">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                Our <span className="text-romantic-600">Journey</span> So Far
              </h2>
            </header>

            <div className="max-w-5xl mx-auto pb-32 px-6">
              <Timeline />
            </div>

            <footer className="bg-white py-20 text-center border-t border-romantic-100">
               <p className="text-slate-800 font-bold">Happy March 10, My Love! ❤️</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;