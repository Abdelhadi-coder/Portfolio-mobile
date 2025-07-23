import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import projects from '../data/projects'
import PrivateToast from '../components/PrivateToat'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
}

export default function Projects() {
  const [showToast, setShowToast] = useState(false)

  const handleClick = (e, isPrivate) => {
    if (isPrivate) {
      e.preventDefault()
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    }
  }

  return (
    <div className="relative">
      <PrivateToast visible={showToast} />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.private ? '#' : project.link}
            target={project.private ? undefined : '_blank'}
            rel={project.private ? undefined : 'noopener noreferrer'}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            onClick={(e) => handleClick(e, project.private)}
            className="group relative rounded-2xl bg-white border border-gray-200 shadow-md transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-[1.03] active:shadow-2xl touch-manipulation flex flex-col"
          >
            <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-blue-700 border-b-2 border-transparent group-hover:border-blue-700 transition-all duration-300 pb-1 group-hover:pb-0">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>

              <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.private && (
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full ml-auto">
                    Private
                  </span>
                )}
              </div>

              {!project.private && (
                <ArrowUpRight className="absolute top-4 right-4 text-blue-500 group-hover:scale-110 transition-transform" />
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
