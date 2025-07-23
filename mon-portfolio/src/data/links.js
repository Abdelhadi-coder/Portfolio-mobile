import { Github, Linkedin, Download } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const links = [
    {
      href: 'https://github.com/Abdelhadi-coder',
      label: 'GitHub',
      Icon: Github,
    },
    {
      href: 'https://www.linkedin.com/in/abdel-hadir',
      label: 'LinkedIn',
      Icon: Linkedin,
    },
    {
      href: 'https://wa.me/33699490045', 
      label: 'WhatsApp',
      Icon: FaWhatsapp,
    },
    {
      href: '/FINALE_ALTERNANCE_CV.pdf',
      label: 'Télécharger mon CV',
      Icon: Download,
      download: true,
    },
]

export default links
