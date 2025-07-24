import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setTimeout(() => setIsOpen(false), 200)
  }

  const linkClasses = `
    cursor-pointer
    px-4 py-2
    rounded-md
    transition
    duration-300
    text-gray-700
    hover:bg-indigo-500 hover:text-white
    active:scale-95
    active:bg-indigo-700
    focus:outline-none focus:ring-2 focus:ring-indigo-400
  `

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold select-none text-transparent bg-clip-text bg-[linear-gradient(to_right,#036bfc,#030ffc,#8c03fc)]">
          <a
            href="/"
            className="inline-block px-3 py-1 rounded-xl border border-transparent transition duration-300 hover:border-gray-300 hover:bg-gray-100/30"
          >
            Abdel-Hadi
          </a>
        </div>
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
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} className="text-indigo-600" /> : <Menu size={28} className="text-indigo-600" />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4 border-t border-gray-200 animate-slideDown">
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
