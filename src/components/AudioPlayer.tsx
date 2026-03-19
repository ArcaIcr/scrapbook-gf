import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  isMuted: boolean;
  toggleMute: () => void;
}

export const AudioPlayer = ({ isMuted, toggleMute }: AudioPlayerProps) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-white/90 backdrop-blur-md pl-2 pr-4 py-2 rounded-full shadow-2xl border border-romantic-200 flex items-center gap-4"
    >
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-romantic-100 text-romantic-600 shrink-0 overflow-hidden">
        <motion.div
           animate={{ rotate: isMuted ? 0 : 360 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Music className="w-5 h-5" />
        </motion.div>
      </div>
      <div className="flex flex-col pr-2 md:pr-6 whitespace-nowrap">
        <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Now Playing</span>
        <span className="text-sm md:text-base text-slate-800 font-bold leading-none">Mundo - IV Of Spades</span>
      </div>
      <button 
        onClick={toggleMute}
        className="p-2.5 ml-auto hover:bg-romantic-50 rounded-full transition-colors cursor-pointer"
      >
        {isMuted ? <VolumeX className="text-slate-400 w-5 h-5" /> : <Volume2 className="text-romantic-600 w-5 h-5 animate-pulse" />}
      </button>
    </motion.div>
  );
};
