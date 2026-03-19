import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export const FallingHearts = ({ isNightMode = false }: { isNightMode?: boolean }) => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    // Generate constant hearts that float in the background
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage string
      delay: Math.random() * 5, // 0 to 5s
      duration: 12 + Math.random() * 18, // 12 to 30s falling
      size: 16 + Math.random() * 24 // 16px to 40px
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
           key={heart.id}
           initial={{ y: "-10vh", opacity: 0, x: 0 }}
           animate={{ 
             y: "110vh", 
             opacity: [0, 1, 0.8, 0],
             x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30] // Gentle sway
           }}
           transition={{
             duration: heart.duration,
             delay: heart.delay,
             repeat: Infinity,
             ease: "linear"
           }}
           className={`absolute ${isNightMode ? 'text-yellow-200/60' : 'text-romantic-200/50'}`}
           style={{ left: `${heart.left}%` }}
        >
          {isNightMode ? (
            <Star size={heart.size} fill="currentColor" />
          ) : (
            <Heart size={heart.size} fill="currentColor" />
          )}
        </motion.div>
      ))}
    </div>
  );
};
