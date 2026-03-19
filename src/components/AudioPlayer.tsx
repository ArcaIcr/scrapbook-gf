import { Volume2, VolumeX, Music, ChevronLeft, ChevronRight, ListMusic, ChevronDown, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// You can add more tracks here! Just make sure to drop the mp3 files into the `public/` folder.
const playlist = [
  { id: 1, title: "Mundo - IV Of Spades", src: "/songs/Mundo.mp3" },
  { id: 2, title: "Bulong - December Avenue", src: "/songs/Bulong.mp3" },
  { id: 3, title: "Ikaw Lamang - Silent Sanctuary", src: "/songs/Ikaw Lamang.mp3" },
  { id: 4, title: "Sa'yo - Silent Sanctuary", src: "/songs/Sa'yo.mp3" },
  { id: 5, title: "Kundiman - Silent Sanctuary", src: "/songs/Kundiman.mp3" },
  { id: 6, title: "Come Inside Of My Heart - IV Of Spades", src: "/songs/Come Inside of My Heart.mp3" },
  { id: 7, title: "Dulo Ng Hangganan - IV Of Spades", src: "/songs/Dulo ng Hangganan.mp3" }
];

interface AudioPlayerProps {
  audioElement: HTMLAudioElement;
}

export const AudioPlayer = ({ audioElement }: AudioPlayerProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(audioElement?.muted || false);
  const collapseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCollapseTimer = () => {
    if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
    collapseTimeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
  };

  useEffect(() => {
    if (isExpanded) {
      startCollapseTimer();
    }
    return () => {
      if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
    }
  }, [isExpanded, currentTrackIndex]);

  useEffect(() => {
    if (!audioElement) return;

    // Listen for track ending to automatically play the next song
    const handleEnded = () => {
      setCurrentTrackIndex(prev => (prev + 1) % playlist.length);
    };
    audioElement.addEventListener('ended', handleEnded);

    // Change src and play when track index changes
    const currentSrc = decodeURI(new URL(audioElement.src).pathname);
    if (currentSrc !== playlist[currentTrackIndex].src) {
      audioElement.src = playlist[currentTrackIndex].src;
      audioElement.play().catch(e => console.log("Play interrupted", e));
    }

    return () => audioElement.removeEventListener('ended', handleEnded);
  }, [currentTrackIndex, audioElement]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioElement) {
      audioElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
    if (isExpanded) startCollapseTimer();
  };

  const playNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const playPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center">

      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.8 }}
            onClick={() => startCollapseTimer()} // Reset timer when they interact
            className="bg-white/95 backdrop-blur-md p-3 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-romantic-100 flex flex-col gap-3 min-w-[280px]"
          >
            {/* Top info row */}
            <div className="flex items-center justify-between px-3 pt-1">
              <div className="flex items-center gap-2 text-romantic-500">
                <ListMusic className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Our Playlist</span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="p-1 text-slate-400 hover:text-romantic-600 hover:bg-romantic-50 rounded-full transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Selected Track Visual */}
            <div className="flex flex-col items-center justify-center p-4">
              <motion.div
                animate={{ rotate: isMuted ? 0 : 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-romantic-300 to-romantic-100 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center shrink-0 border-4 border-white mb-4"
              >
                <Disc className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col items-center text-center">
                <span className="text-base font-bold text-slate-800 line-clamp-1 w-[200px]">{playlist[currentTrackIndex].title}</span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-evenly px-4 pb-2">
              <button onClick={playPrev} className="p-2 text-slate-400 hover:text-romantic-600 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button onClick={toggleMute} className="p-4 bg-romantic-500 hover:bg-romantic-600 text-white rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-pulse" />}
              </button>

              <button onClick={playNext} className="p-2 text-slate-400 hover:text-romantic-600 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-2xl border border-romantic-100 cursor-pointer flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: isMuted ? 0 : 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-romantic-400 to-romantic-200 text-white shadow-inner flex items-center justify-center border-2 border-white"
            >
              <Music className="w-5 h-5 drop-shadow-sm" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Now Playing</span>
              <span className="text-xs font-bold text-slate-700 truncate max-w-[100px] md:max-w-[150px] leading-none">{playlist[currentTrackIndex].title}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
