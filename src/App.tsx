import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { Hero } from './sections/Hero';
import { MainContent } from './sections/MainContent';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    setIsStarted(true);
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
      <AnimatePresence mode="wait">
        {!isStarted ? (
          <Hero onStart={startExperience} />
        ) : (
          <>
            <button 
              onClick={toggleMute}
              className="fixed bottom-8 right-8 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-romantic-100 hover:scale-110 transition-transform"
            >
              {isMuted ? <VolumeX className="text-slate-400 w-6 h-6" /> : <Volume2 className="text-romantic-600 w-6 h-6 animate-pulse" />}
            </button>
            <MainContent />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;