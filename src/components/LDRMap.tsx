import { motion } from 'framer-motion';


export const LDRMap = () => {
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">Our Connection 🌍</h3>
        <p className="text-slate-500 font-serif italic text-lg md:text-xl">Distance means so little when someone means so much.</p>
      </div>

      {/* The Radar / Holographic Map Display */}
      <div className="relative w-full h-[450px] md:h-[600px] bg-[#0b1021] rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-slate-900 overflow-hidden flex items-center justify-center group">

        {/* Abstract Topographic / Radar Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Soft Ambient Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-romantic-900/10 to-transparent pointer-events-none" />

        {/* Abstract Watercolor Island Representation (Philippines) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [-5, -6, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[30%] md:left-[35%] w-[100px] md:w-[150px] h-[160px] md:h-[200px] bg-pink-500/10 blur-[40px] md:blur-[50px] rounded-[100%] pointer-events-none"
        /> {/* Luzon Region */}

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [10, 15, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[45%] left-[45%] md:left-[50%] w-[120px] md:w-[180px] h-[80px] md:h-[120px] bg-rose-500/10 blur-[35px] md:blur-[45px] rounded-full pointer-events-none"
        /> {/* Visayas Region */}

        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[30%] md:right-[35%] w-[140px] md:w-[220px] h-[100px] md:h-[140px] bg-romantic-600/10 blur-[40px] md:blur-[60px] rounded-[40%] pointer-events-none"
        /> {/* Mindanao Region */}

        {/* --- THE CONNECTION ARC (SVG) --- */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Faded persistent background path */}
          <path
            d="M 35 30 Q 75 35 65 72"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="0.2"
            strokeDasharray="2 2"
            className="opacity-20"
          />

          {/* Animated glowing sweep path */}
          <motion.path
            d="M 35 30 Q 75 35 65 72"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="0.6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_0_8px_rgba(244,114,182,1)]"
          />

          {/* Second reverse pulsing line for intensity */}
          <motion.path
            d="M 35 30 Q 75 35 65 72"
            fill="none"
            stroke="#fff"
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
        </svg>

        {/* --- BULACAN NODE --- */}
        <div className="absolute z-20 flex flex-col items-center top-[30%] left-[35%] -translate-x-1/2 -translate-y-1/2 group">
          {/* Radar Ping */}
          <span className="absolute w-12 h-12 md:w-20 md:h-20 bg-pink-400 rounded-full opacity-60 animate-ping" />

          {/* Marker Pin */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative w-6 h-6 md:w-8 md:h-8 bg-pink-400 rounded-full border-2 md:border-4 border-[#0b1021] shadow-[0_0_20px_rgba(244,114,182,0.8)] z-10 flex items-center justify-center cursor-pointer"
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-80" />
          </motion.div>

          {/* Label Container */}
          <div className="mt-4 flex flex-col items-center">
            <span className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Bulacan</span>
            <span className="text-[10px] md:text-xs text-pink-200 font-black uppercase tracking-widest bg-pink-500/30 px-3 py-1 rounded-full mt-2 border border-pink-500/40 backdrop-blur-md shadow-lg">Kiaa / Her</span>
          </div>
        </div>

        {/* --- CDO NODE --- */}
        <div className="absolute z-20 flex flex-col items-center top-[72%] left-[65%] -translate-x-1/2 -translate-y-1/2 group">
          {/* Radar Ping */}
          <span className="absolute w-12 h-12 md:w-20 md:h-20 bg-rose-500 rounded-full opacity-60 animate-ping" style={{ animationDelay: "1s" }} />

          {/* Marker Pin */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative w-6 h-6 md:w-8 md:h-8 bg-rose-500 rounded-full border-2 md:border-4 border-[#0b1021] shadow-[0_0_20px_rgba(244,63,94,0.8)] z-10 flex items-center justify-center cursor-pointer"
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-80" />
          </motion.div>

          {/* Label Container */}
          <div className="mt-4 flex flex-col items-center">
            <span className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Cagayan de Oro</span>
            <span className="text-[10px] md:text-xs text-rose-200 font-black uppercase tracking-widest bg-rose-500/30 px-3 py-1 rounded-full mt-2 border border-rose-500/40 backdrop-blur-md shadow-lg">Ken / You</span>
          </div>
        </div>

      </div>
    </div>
  );
};
