// import { Typewriter } from 'react-simple-typewriter'
// import { Github, Linkedin, Download } from 'lucide-react'

// function Hero() {
//   return (
// <section className="min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white text-gray-900 px-4 relative overflow-hidden">
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
//             href="https://github.com/Abdelhadi-coder"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative group text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-full p-1"
//         >
//             <Github className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//             <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//             GitHub
//             </span>
//         </a>

//         {/* LinkedIn */}
//         <a
//             href="https://www.linkedin.com/in/abdel-hadir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative group text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-full p-1"
//         >
//             <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//             <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//             LinkedIn
//             </span>
//         </a>

//         {/* CV */}
//         <a
//             href="/FINALE_ALTERNANCE_CV.pdf"
//             download
//             className="relative group text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-full p-1"
//         >
//             <Download className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
//             <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
//             Télécharger mon CV
//             </span>
//         </a>
//         </div>
//     </section>
//   )
// }

// export default Hero

import { useState, useEffect, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Download } from 'lucide-react'

function Hero() {
  const [activeId, setActiveId] = useState(null)
  const containerRef = useRef(null)

  // Ferme le tooltip quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveId(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const links = [
    {
      id: 'github',
      href: 'https://github.com/Abdelhadi-coder',
      label: 'GitHub',
      Icon: Github,
      external: true,
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/abdel-hadir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      label: 'LinkedIn',
      Icon: Linkedin,
      external: true,
    },
    {
      id: 'cv',
      href: '/FINALE_ALTERNANCE_CV.pdf',
      label: 'Télécharger mon CV',
      Icon: Download,
      download: true,
    },
  ]

  return (
    <section className="min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white text-gray-900 px-4 relative overflow-hidden">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center">
        Hello, moi c’est{' '}
        <div className="inline-block">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#036bfc,#030ffc,#8c03fc)]">
            Abdel-Hadi
          </span>
          {/* Barre sous le prénom, uniquement mobile */}
          <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 block md:hidden" />
        </div>
      </h1>

      <h2 className="text-xl sm:text-2xl font-medium text-gray-700 text-center mb-6">
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

      <div
        ref={containerRef}
        className="flex gap-6 items-center justify-center bg-white border border-gray-200 shadow-md rounded-full px-6 py-3 max-w-[90%] sm:max-w-md md:max-w-lg"
      >
        {links.map(({ id, href, label, Icon, external, download }) => (
          <a
            key={id}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            download={download}
            onClick={(e) => {
              e.preventDefault()
              setActiveId(id === activeId ? null : id) // toggle actif/inactif
              if (external || download) {
                // ouvre le lien après un léger délai pour voir l’effet
                setTimeout(() => {
                  if (download) {
                    window.location.href = href
                  } else {
                    window.open(href, '_blank', 'noopener,noreferrer')
                  }
                }, 150)
              }
            }}
            className={`
              relative group rounded-full p-1
              text-blue-600
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400
              transition
              ${activeId === id ? 'bg-gray-300' : ''}
            `}
            aria-label={label}
            tabIndex={0}
          >
            <Icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
            <span
              className={`
                absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                text-white text-xs rounded-md px-2 py-1
                bg-gray-800
                transition-opacity duration-200
                pointer-events-none
                ${activeId === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus:opacity-100'}
              `}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero
