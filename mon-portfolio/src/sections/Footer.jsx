import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <motion.div
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          whileHover={{ scale: 1.05 }}
        >
          Abdel-Hadi
        </motion.div>

        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Abdel-Hadi. Tous droits réservés.
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        Développé avec <span className="text-blue-600">React</span>, <span className="text-purple-600">TailwindCSS</span> & <span className="text-green-600">Framer Motion</span>.
      </div>
    </footer>
  );
}
