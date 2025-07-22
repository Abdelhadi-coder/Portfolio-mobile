// import { Typewriter } from 'react-simple-typewriter'
// import { Github, Linkedin, Download } from 'lucide-react'

// function Hero() {
//   return (
//     <section className="min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white text-gray-900 px-4 relative overflow-hidden">
//       <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center">
//         Hello, moi c’est{' '}
//         <div className="inline-block">
//           <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#036bfc,#030ffc,#8c03fc)]">
//             Abdel-Hadi
//           </span>
//           {/* Barre sous le prénom, uniquement mobile */}
//           <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 block md:hidden" />
//         </div>
//       </h1>

//       <h2 className="text-xl sm:text-2xl font-medium text-gray-700 text-center mb-6">
//         <Typewriter
//           words={[
//             'UX/UI Designer',
//             'Développeur Frontend créatif',
//             'Passionné par le design mobile',
//             'Motivé & déterminé',
//             'Toujours prêt à relever un défi',
//           ]}
//           loop={0}
//           cursor
//           cursorStyle="|"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1000}
//         />
//       </h2>

//       <div className="flex gap-6 items-center justify-center bg-white border border-gray-200 shadow-md rounded-full px-6 py-3 max-w-[90%] sm:max-w-md md:max-w-lg">
//         {/* GitHub */}
//         <a
//           href="https://github.com/Abdelhadi-coder"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative group text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-full p-3 active:bg-gray-200 transition"
//         >
//           <Github className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//           <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//             GitHub
//           </span>
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/abdel-hadir"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative group text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-full p-3 active:bg-gray-200 transition"
//         >
//           <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//           <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//             LinkedIn
//           </span>
//         </a>

//         {/* CV */}
//         <a
//           href="/FINALE_ALTERNANCE_CV.pdf"
//           download
//           className="relative group text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-full p-3 active:bg-gray-200 transition"
//         >
//           <Download className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//           <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//             Télécharger mon CV
//           </span>
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero

import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[95vh] flex items-center justify-center px-4 bg-gradient-to-b from-blue-100 to-white text-gray-900 relative">
      <div className="flex flex-col items-center text-center max-w-3xl w-full transform -translate-y-10">
        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-7">
          Hello, moi c’est{' '}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#036bfc,#030ffc,#8c03fc)]">
            Abdel-Hadi
          </span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-9 font-medium">
          <Typewriter
            words={[
              'UX/UI Designer',
              'Développeur Frontend créatif',
              'Passionné par le design mobile',
              'Motivé & déterminé',
              'Toujours prêt à relever un défi',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4 leading-relaxed mb-8 sm:mb-8 md:mb-16">
        Je suis un <span className="text-blue-700 font-semibold">développeur frontend</span> passionné par le design et
        les interfaces modernes. Mon objectif ? Créer des expériences
        <span className="text-blue-700 font-semibold"> percutantes</span>, 
        <span className="text-blue-700 font-semibold"> accessibles</span> et à la
        <span className="text-blue-700 font-semibold"> pointe de la créativité</span>.
        </p>

        <div className="flex gap-6 items-center justify-center bg-white border border-gray-200 shadow-lg rounded-full px-6 py-3 mb-4">
        <a
            href="https://github.com/Abdelhadi-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-blue-700 focus:outline-none rounded-full p-3 hover:bg-gray-100 transition"
        >
            <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white rounded px-2 py-1 transition-opacity">
            GitHub
            </span>
        </a>
        <a
            href="https://www.linkedin.com/in/abdel-hadir"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-blue-700 focus:outline-none rounded-full p-3 hover:bg-gray-100 transition"
        >
            <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white rounded px-2 py-1 transition-opacity">
            LinkedIn
            </span>
        </a>
        <a
            href="/FINALE_ALTERNANCE_CV.pdf"
            download
            className="relative group text-blue-700 focus:outline-none rounded-full p-3 hover:bg-gray-100 transition"
        >
            <Download className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white rounded px-2 py-1 transition-opacity">
            Télécharger mon CV
            </span>
        </a>
        </div>
      </div>
    </section>
  )
}
