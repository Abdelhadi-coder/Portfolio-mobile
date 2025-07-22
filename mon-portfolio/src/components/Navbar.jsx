import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Scroll en douceur vers la section
  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // ferme le menu mobile après clic
  }

  const linkClasses = `
    cursor-pointer
    px-4 py-2
    rounded-md
    transition
    duration-200
    text-gray-700
    hover:bg-indigo-500 hover:text-white
    active:bg-indigo-700
    focus:outline-none focus:ring-2 focus:ring-indigo-400
  `

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 select-none"><a href="/">Abdel-Hadi</a></div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">
          {['projects', 'skills', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClasses}
                onClick={(e) => handleLinkClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} className="text-indigo-600" /> : <Menu size={28} className="text-indigo-600" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4 border-t border-gray-200">
          {['projects', 'skills', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClasses + ' block text-lg'}
                onClick={(e) => handleLinkClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
