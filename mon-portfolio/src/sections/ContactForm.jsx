import { motion } from 'framer-motion'
import { useState } from 'react'
import Toast from '../components/Toast'

const inputVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setToastMessage("✉️ Merci !")
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('abdel-hadi.ranem@epitech.eu')
    setToastMessage("✅ Email copié !")
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  return (
    <>
      <Toast visible={toastVisible} message={toastMessage} />
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-gray-900"
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">
          Contactez-moi
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md"
        >
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div
              key={field}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={inputVariants}
              className="mb-6"
            >
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={field === 'name' ? 'Nom' : 'Email'}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              ) : (
                <textarea
                  name="message"
                  placeholder="Ton message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-md hover:bg-blue-800 active:bg-blue-900 transition"
          >
            Envoyer
          </motion.button>
        </form>

        <motion.div
          onClick={copyEmail}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 cursor-pointer select-none text-blue-700 underline underline-offset-4 text-center text-base sm:text-lg"
          title="Cliquez pour copier l'email"
        >
          abdel-hadi.ranem@epitech.eu
        </motion.div>
      </section>
    </>
  )
}
