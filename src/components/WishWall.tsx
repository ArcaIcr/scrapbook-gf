import { motion } from 'framer-motion';

const wishes = [
  { id: 1, text: "Samgyupsal Date 🍖", color: "bg-yellow-100" },
  { id: 2, text: "Beach Trip in MisOr 🏖️", color: "bg-blue-100" },
  { id: 3, text: "Movie Marathon 🍿", color: "bg-purple-100" },
  { id: 4, text: "Coffee Study Date ☕", color: "bg-orange-100" },
];

export const WishWall = () => {
  return (
    <div className="py-20">
      <h3 className="text-2xl font-bold text-center text-slate-800 mb-10">Our Future Wishes ✨</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {wishes.map((wish) => (
          <motion.div
            key={wish.id}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            className={`${wish.color} p-6 rounded-xl shadow-md border-b-4 border-black/10 text-center font-medium text-slate-700`}
          >
            {wish.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};