// import React from 'react'

// export default function DownloadToast({ visible }) {
//   return (
//     <div
//       className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-2xl bg-gray-800/90 text-white text-lg font-semibold shadow-lg backdrop-blur-md z-50 flex items-center gap-3 transition-opacity duration-500 ${
//         visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//       role="alert"
//       aria-live="assertive"
//     >
//       <div className="animate-bounce">
//         {/* Flèche vers le bas simple en SVG */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
//       <span>Téléchargement lancé...</span>
//     </div>
//   )
// }
