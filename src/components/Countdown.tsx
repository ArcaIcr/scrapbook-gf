import { useState, useEffect } from 'react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const getNextTargetDate = () => {
      const now = new Date();
      let target = new Date(now.getFullYear(), now.getMonth(), 10, 0, 0, 0);
      
      // If the 10th of this month has already passed, target the 10th of the next month
      if (now.getTime() >= target.getTime()) {
        target.setMonth(target.getMonth() + 1);
      }
      return target.getTime();
    };

    let targetDate = getNextTargetDate();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = targetDate - now;

      // When the countdown reaches zero, immediately compute the next target date
      if (distance <= 0) {
        targetDate = getNextTargetDate();
        distance = targetDate - now;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center font-mono">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-romantic-100 text-romantic-600 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl text-xl md:text-2xl font-black shadow-inner">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold mt-2 text-slate-400">{unit}</span>
        </div>
      ))}
    </div>
  );
};