import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Stars, Plane, Cloud, Disc, Music } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { WishWall } from '../components/WishWall';
import { LetterModal } from '../components/LetterModal';
import { TimeTogether } from '../components/TimeTogether';
import { LDRMap } from '../components/LDRMap';
import { LoveCards } from '../components/LoveCards';

export const MainContent = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* --- CINEMATIC HEADER --- */}
      <header className="pt-32 pb-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-romantic-100 text-romantic-700 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6"
        >
          <Sparkles className="w-3 h-3" />
          Our Story Since Sept 2025
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-linear-to-r from-romantic-600 to-rose-400">Journey</span> So Far
        </h2>

        <div className="w-24 h-1 bg-romantic-600 mx-auto rounded-full" />

        <TimeTogether />
      </header>

      {/* --- DIGITAL SCRAPBOOK (TIMELINE) --- */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <Timeline />
      </section>

      {/* --- LDR CONNECTION MAP --- */}
      <section className="bg-slate-50 border-y border-slate-100 mb-0">
        <LDRMap />
      </section>

      {/* --- REASONS I LOVE YOU CARDS --- */}
      <section className="border-b border-romantic-100">
        <LoveCards />
      </section>

      {/* --- INTERACTIVE WISH WALL --- */}
      <section className="bg-white border-t border-romantic-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <WishWall />
        </div>
      </section>

      {/* --- SECRET LETTER CALL TO ACTION --- */}
      <section className="py-20 text-center bg-romantic-50/50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button
            onClick={() => setIsLetterOpen(true)}
            className="group relative px-10 py-4 bg-white border-2 border-romantic-200 text-romantic-600 rounded-full font-bold shadow-sm hover:shadow-md hover:border-romantic-400 transition-all cursor-pointer"
          >
            <span className="flex items-center gap-3">
              Read my secret letter for you ✉️
            </span>
          </button>
        </motion.div>
        <p className="mt-4 text-slate-400 text-sm italic">Click to open a special note</p>
      </section>

      {/* --- TO INFINITY FOOTER --- */}
      <footer className="relative bg-gradient-to-b from-slate-900 via-[#0f172a] to-black border-t-0 pt-40 pb-32 text-center overflow-hidden mt-20">

        {/* Glowing Horizon & Moon effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-romantic-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-32 right-[10%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full shadow-[0_0_80px_rgba(253,230,138,0.4)] blur-[1px] opacity-90 pointer-events-none z-0" />

        {/* Wavy Top Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] text-romantic-50 dark-mode:text-slate-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Deep Field Stars */}
        <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={`footer-star-${i}`}
              animate={{ opacity: [0.1, 1, 0.1], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 2 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() > 0.8 ? '3px' : '1.5px',
                height: Math.random() > 0.8 ? '3px' : '1.5px'
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shooting-star-${i}`}
              initial={{ x: '120vw', y: '-20vh', opacity: 0 }}
              animate={{ x: '-20vw', y: '100vh', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 3 + i * 8 + Math.random() * 5, ease: "linear" }}
              className="absolute w-[150px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[-45deg] blur-[1px]"
            />
          ))}
        </div>

        {/* Parallax Background Clouds */}
        <motion.div
          animate={{ x: ['-20vw', '120vw'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-40 left-0 text-white/[0.03] z-0"
        >
          <Cloud className="w-48 h-48 filter blur-[2px]" />
        </motion.div>
        <motion.div
          animate={{ x: ['120vw', '-20vw'] }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="absolute top-60 right-0 text-white/[0.04] z-0"
        >
          <Cloud className="w-64 h-64 filter blur-[4px]" />
        </motion.div>

        {/* To Infinity Plane with Vapor Trail */}
        <motion.div
          animate={{ x: ['-10vw', '110vw'], y: [0, -40, 20, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-32 md:top-48 left-0 z-10 flex items-center"
        >
          {/* Vapor Trail */}
          <div className="absolute right-7 md:right-10 w-[150px] md:w-[250px] h-[2px] bg-gradient-to-l from-white/60 to-transparent rounded-full blur-[1px]" />
          <Plane className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] filter transform rotate-45" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center px-4 mt-10">
          <p className="text-romantic-300 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm mb-6 drop-shadow-md">
            To Infinity & Beyond
          </p>
          <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight font-serif italic drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] pb-2">
            Six months down...<br className="md:hidden" /> forever to go.
          </h3>

          <div className="mt-16 flex items-center justify-center gap-4 opacity-80">
            <span className="w-16 h-px bg-gradient-to-l from-white/50 to-transparent"></span>
            <p className="text-slate-300 font-serif italic text-xl md:text-2xl drop-shadow-md">Yours truly, Ken</p>
            <span className="w-16 h-px bg-gradient-to-r from-white/50 to-transparent"></span>
          </div>
        </div>

        {/* THE SECRET VINYL CLOUD EASTER EGG */}
        <a
          href="https://open.spotify.com/playlist/2KSuaISZEkmGXIxgj27e4o?si=7A8QmjaqRK6ZUo7GAXQW5Q&pi=RTI7_dApQ7GO_"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-6 right-6 md:bottom-12 md:right-16 group cursor-pointer z-30"
          title="Our Secret Playlist"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Cloud Base */}
            <Cloud className="w-16 h-16 md:w-20 md:h-20 text-slate-800/80 group-hover:text-romantic-900 transition-colors duration-500 filter drop-shadow-2xl fill-slate-800/80 group-hover:fill-romantic-800 backdrop-blur-sm" />

            {/* Spinning Vinyl connecting it to the cloud */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity duration-500 bg-black rounded-full p-[2px] shadow-[0_0_20px_rgba(244,63,94,0.6)] flex items-center justify-center"
            >
              <Disc className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <div className="absolute w-2 h-2 bg-romantic-500 rounded-full" />
            </motion.div>

            {/* Music notes floating away on hover */}
            <div className="absolute inset-0 pointer-events-none hidden group-hover:block">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`music-${i}`}
                  animate={{ y: [0, -50], opacity: [0, 1, 0], x: [0, (i - 1) * 25], rotate: [0, (i % 2 === 0 ? 15 : -15)] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="absolute -top-4 left-1/2"
                >
                  <Music className="w-5 h-5 text-romantic-400 drop-shadow-md" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </a>
      </footer>

      {/* --- MODAL COMPONENT --- */}
      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />
    </motion.div>
  );
};