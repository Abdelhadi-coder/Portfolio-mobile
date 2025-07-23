import { motion } from 'framer-motion'
import skills from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen p-8 scroll-mt-24 bg-white text-gray-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map(({ name, icon: Icon, color }, index) => {
          const groupIndex = Math.floor(index / 2)
          const isLeft = groupIndex % 2 === 0
          const xOffset = isLeft ? -30 : 30

          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: xOffset, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <Icon className="w-12 h-12 mb-3" style={{ color }} />
              <span className="text-sm font-medium text-gray-800">{name}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
