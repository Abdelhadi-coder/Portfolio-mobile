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
          target={project.link === "#" ? undefined : "_blank"}
          rel={project.link === "#" ? undefined : "noopener noreferrer"}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={i}
          onClick={(e) => {
            if (project.link === "#") e.preventDefault()
          }}
          className="
            group
            relative
            rounded-2xl
            bg-white
            border
            border-gray-200
            p-6
            shadow-md
            transition
            duration-300
            ease-out

            hover:-translate-y-1.5
            hover:shadow-xl

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500

            active:scale-[1.03]
            active:shadow-2xl

            // Mobile touch effect (simulate tap)
            touch-manipulation

            "
        >
          <h3
            className="
              text-xl
              font-bold
              text-blue-700
              border-b-2 border-transparent
              group-hover:border-blue-700
              transition-all duration-300
              pb-1
              group-hover:pb-0
            "
          >
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
