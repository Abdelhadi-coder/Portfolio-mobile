// // src/components/ThemeToggle.tsx
// import { useEffect, useState } from 'react';
// import { Moon, Sun } from 'lucide-react';

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   useEffect(() => {
//     const root = window.document.documentElement;
//     const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     const initialTheme = saved || (prefersDark ? 'dark' : 'light');
//     setTheme(initialTheme);
//     root.classList.toggle('dark', initialTheme === 'dark');
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-zinc-800 text-black dark:text-white shadow-md transition duration-300 hover:scale-105"
//       aria-label="Toggle theme"
//     >
//       {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }
