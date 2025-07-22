import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import projects from '../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
}

export default function Projects() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={i}
          className="group relative rounded-2xl bg-white border border-gray-200 p-6 shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 className="text-xl font-bold text-blue-700 group-hover:underline">
            {project.title}
          </h3>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight className="absolute top-4 right-4 text-blue-500 group-hover:scale-110 transition-transform" />
        </motion.a>
      ))}
    </div>
  )
}
