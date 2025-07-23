import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from 'lucide-react'
import links from '../data/links'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Hero() {

    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
    const stored = localStorage.getItem("activeLink");
    if (stored) setActiveLink(stored);
    }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-b from-blue-100 to-white text-gray-900 relative">
      <motion.div
        className="flex flex-col items-center text-center max-w-3xl w-full transform -translate-y-5"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-7"
        variants={fadeInUp}
        >
        Hello, moi c’est{' '}
        <span className="whitespace-nowrap text-transparent bg-clip-text bg-[linear-gradient(to_right,#036bfc,#030ffc,#8c03fc)]">
            Abdel-Hadi
        </span>
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 font-medium"
          variants={fadeInUp}
        >
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
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 px-4 leading-relaxed mb-8 sm:mb-8 md:mb-16"
          variants={fadeInUp}
        >
          Je suis un <span className="text-blue-700 font-semibold">développeur frontend</span> passionné par le design et
          les interfaces modernes. Mon objectif ? Créer les app les plus
          <span className="text-blue-700 font-semibold"> percutantes</span>, les plus
          <span className="text-blue-700 font-semibold"> claires</span> et les plus
          <span className="text-blue-700 font-semibold"> design</span>.
        </motion.p>

        <motion.div
          className="flex gap-6 items-center justify-center bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2 mb-4"
          variants={fadeInUp}
        >
          {links.map(({ href, label, Icon, download }) => (
           <a
            key={label}
            href={href}
            target={download ? undefined : "_blank"}
            rel={download ? undefined : "noopener noreferrer"}
            download={download}
            onClick={() => {
                setActiveLink(label);
                localStorage.setItem("activeLink", label);
            }}
            className={`relative group text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2.5 transition
                ${activeLink === label ? "bg-gray-100" : ""}
                hover:bg-gray-100 active:bg-gray-200`}
            >
            <Icon className="w-8 h-8 group-hover:scale-110 group-focus:scale-110 transition-transform" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-xs bg-gray-800 text-white rounded px-2 py-1 transition-opacity">
                {label}
            </span>
            </a>

          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

