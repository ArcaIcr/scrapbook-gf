import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from './sections/Hero';
import { MainContent } from './sections/MainContent';
import { FallingHearts } from './components/FallingHearts';
import { AudioPlayer } from './components/AudioPlayer';
import { NightModeToggle } from './components/NightModeToggle';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    setIsStarted(true);
    // Create the audio element, allowing playback due to user click.
    if (!audioRef.current) {
      audioRef.current = new Audio('/Mundo.mp3');
    }
    // The AudioPlayer component will handle the 'ended' event to loop or skip tracks
    audioRef.current.play().catch(err => console.log("Playback failed:", err));
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
            <AudioPlayer audioElement={audioRef.current!} />
            <MainContent />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;