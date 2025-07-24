'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Toast from '../components/Toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ name: '', email: '', message: '' })

    setToastMessage("✉️ Merci pour ton message ! (La messagerie ne marche pas)")
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2500)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('ton.email@example.com')
    setToastMessage("✅ Email copié !")
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2000)
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
  }

  return (
    <>
      <Toast visible={toastVisible} message={toastMessage} />
      <section id="contact" className="py-16 px-8 flex flex-col justify-center items-center text-gray-900">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Contactez-moi
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-50 rounded-2xl p-8 shadow-md"
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
                  placeholder={field === 'name' ? 'Nom' : field === 'email' ? 'Email' : ''}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              ) : (
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 active:bg-blue-900 transition"
          >
            Envoyer
          </motion.button>
        </form>

        <motion.div
          onClick={copyEmail}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 cursor-pointer select-none text-blue-700 underline underline-offset-4"
          title="Cliquez pour copier l'email"
        >
          abdel-hadi.ranem@epitech.eu
        </motion.div>
      </section>
    </>
  )
}
