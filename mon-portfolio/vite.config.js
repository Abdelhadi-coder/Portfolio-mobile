// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// })

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary: {
                from: '#3b82f6', // blue-500
                to: '#8b5cf6',   // violet-500
              },
            },
          },
        },
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
      },
    }),
  ],
});
