import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { memories } from '../data/memories';
import { X } from 'lucide-react';

export const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative space-y-24 py-12 px-2 overflow-hidden">
      {/* Background Track */}
      <div className="absolute top-0 bottom-0 left-5 md:left-1/2 -translate-x-1/2 w-1.5 bg-romantic-100 rounded-full" />
      
      {/* Glowing Thread filling up */}
      <motion.div 
        style={{ height: lineHeight }}
        className="absolute top-0 left-5 md:left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-romantic-400 to-red-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.6)] z-0 origin-top"
      />

      {memories.map((memory, index) => {
        const isEven = index % 2 === 0;
        const rotateClass = isEven ? "md:-rotate-2" : "md:rotate-2";
        
        return (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-150px" }}
            className="relative flex flex-col md:items-center justify-between md:flex-row md:odd:flex-row-reverse group z-10"
          >
            {/* The Dot on the Line */}
            <div className="absolute left-5 md:static md:flex items-center justify-center w-8 h-8 md:w-12 md:h-12 -translate-x-1/2 md:translate-x-0 rounded-full border-4 border-[#fffcf2] bg-white text-romantic-500 shadow-xl shrink-0 z-20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-romantic-100 hidden sm:flex">
              <HeartIcon />
            </div>
            
            <div className="absolute left-5 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-white bg-romantic-500 shadow-xl sm:hidden z-20" />

            {/* The Polaroid Card */}
            <div className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[42%] bg-[#fffcf2] p-4 pb-8 rounded-sm shadow-xl border border-black/5 transition-all duration-500 hover:scale-105 hover:z-30 hover:shadow-2xl ${rotateClass}`}>
              
              {/* Cute tape piece */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 border border-white/60 shadow-sm rotate-[-3deg] backdrop-blur-md z-10" style={{ mixBlendMode: 'overlay' }} />

              <div className="relative overflow-hidden rounded-sm bg-slate-100 aspect-[4/3] group-hover:shadow-inner cursor-zoom-in group/img" onClick={() => setSelectedImage(memory.imageUrl)}>
                <img 
                  src={memory.imageUrl} 
                  alt={memory.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="mt-6 flex flex-col items-center text-center px-2">
                <span className="font-serif italic text-romantic-500 text-sm font-bold tracking-widest uppercase mb-1">{memory.date}</span>
                <div className="text-xl font-bold text-slate-800 mb-3 font-serif">{memory.title}</div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-serif italic text-pretty">"{memory.description}"</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors cursor-pointer bg-white/10 rounded-full hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", bounce: 0.4 }}
              src={selectedImage}
              alt="Enlarged memory"
              className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default p-2 bg-[#fffcf2] rounded-md rotate-1"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="animate-pulse drop-shadow-sm"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path></svg>
);