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
    id: 1,
    date: "October 2025",
    title: "The First Month",
    description: "Thinking back to where it all started in CDO...",
    imageUrl: "/images/month1.jpg" // Put your photos in the /public/images folder
  },
  // Add entries for months 2, 3, 4, and 5 here
  {
    id: 6,
    date: "March 10, 2026",
    title: "Happy 6th Monthsary!",
    description: "To many more adventures together.",
    imageUrl: "/images/anniversary.jpg"
  }
];