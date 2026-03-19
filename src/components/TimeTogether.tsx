import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TimeTogether = () => {
  const [timeTogether, setTimeTogether] = useState({
    months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Start date: September 10, 2025
    const start = new Date('2025-09-10T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      
      let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
      let tempDate = new Date(start.getFullYear(), start.getMonth() + months, start.getDate());
      
      if (now.getTime() < tempDate.getTime()) {
        months--;
        tempDate = new Date(start.getFullYear(), start.getMonth() + months, start.getDate());
      }
      
      const diffAfterMonths = Math.max(0, now.getTime() - tempDate.getTime());
      
      const days = Math.floor(diffAfterMonths / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffAfterMonths % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffAfterMonths % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffAfterMonths % (1000 * 60)) / 1000);

      setTimeTogether({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap justify-center gap-3 md:gap-6 mt-12 mb-8 font-mono"
    >
      {Object.entries(timeTogether).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-white border text-romantic-600 border-romantic-100 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl text-2xl md:text-3xl font-black shadow-sm">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold mt-2 text-slate-400">{unit}</span>
        </div>
      ))}
    </motion.div>
  );
};
