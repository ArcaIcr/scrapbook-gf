// src/data/memories.ts
export interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const memories: Memory[] = [
  {
    id: 0,
    date: "August 29, 2025",
    title: "Our First Conversation 💬",
    description: "The spark that started it all. Who knew a simple message would lead to this beautiful journey?",
    imageUrl: "/images/first-chat.jpg"
  },
  {
    id: 1,
    date: "October 10, 2025",
    title: "1st Monthsary ✨",
    description: "Our first official month together! A month full of discoveries, late-night talks, and growing closer.",
    imageUrl: "/images/month1.jpg"
  },
  {
    id: 2,
    date: "November 10, 2025",
    title: "2nd Monthsary 🍂",
    description: "Two months of building our connection between CDO and Bulacan. Distance means so little when someone means so much.",
    imageUrl: "/images/month2.jpg"
  },
  {
    id: 3,
    date: "December 10, 2025",
    title: "3rd Monthsary 🎄",
    description: "Celebrating three months during the most wonderful time of the year. The best gift I could ever ask for.",
    imageUrl: "/images/month3.jpg"
  },
  {
    id: 4,
    date: "January 10, 2026",
    title: "4th Monthsary 🎆",
    description: "Stepping into a brand new year hand in hand. 2026 is going to be our year of adventures.",
    imageUrl: "/images/month4.jpg"
  },
  {
    id: 5,
    date: "February 10, 2026",
    title: "5th Monthsary 💘",
    description: "Five months. Just in time for Valentine's season. Every day I spend loving you becomes my new favorite day.",
    imageUrl: "/images/month5.jpg"
  },
  {
    id: 6,
    date: "March 10, 2026",
    title: "Happy 6th Monthsary! 🎈",
    description: "Half a year down, forever to go. I am so incredibly proud to be your boyfriend, Kiaa.",
    imageUrl: "/images/month6.jpg"
  }
];