import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from './sections/Hero';
import { MainContent } from './sections/MainContent';
import { FallingHearts } from './components/FallingHearts';
import { AudioPlayer } from './components/AudioPlayer';
import { NightModeToggle } from './components/NightModeToggle';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
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
    <main className={`min-h-screen transition-colors duration-1000 selection:bg-romantic-200 overflow-x-hidden font-sans ${isNightMode ? 'bg-slate-900 dark-mode' : 'bg-romantic-50'}`}>
      <AnimatePresence mode="wait">
        {!isStarted ? (
          <Hero onStart={startExperience} />
        ) : (
          <>
            <FallingHearts isNightMode={isNightMode} />
            <NightModeToggle isNightMode={isNightMode} toggleNightMode={() => setIsNightMode(!isNightMode)} />
            <AudioPlayer isMuted={isMuted} toggleMute={toggleMute} />
            <MainContent />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;