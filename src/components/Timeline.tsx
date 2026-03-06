import { motion } from 'framer-motion';
import { memories } from '../data/memories';

export const Timeline = () => {
  return (
    <div className="relative space-y-24 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-romantic-300 before:to-transparent">
      {memories.map((memory, index) => (
        <motion.div
          key={memory.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* The Dot on the Line */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-romantic-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <HeartIcon />
          </div>

          {/* The Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl shadow-lg border border-romantic-100 transition-transform hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-romantic-600">{memory.date}</span>
            </div>
            <div className="text-xl font-bold text-slate-800 mb-2">{memory.title}</div>
            <img 
              src={memory.imageUrl} 
              alt={memory.title} 
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-inner"
            />
            <p className="text-slate-600 leading-relaxed">{memory.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path></svg>
);