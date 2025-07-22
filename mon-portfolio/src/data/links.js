import { Github, Linkedin, Download } from 'lucide-react'

const links = [
  {
    id: 'github',
    href: 'https://github.com/Abdelhadi-coder',
    label: 'GitHub',
    Icon: Github,
    external: true,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/abdel-hadir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    label: 'LinkedIn',
    Icon: Linkedin,
    external: true,
  },
  {
    id: 'cv',
    href: '/FINALE_ALTERNANCE_CV.pdf',
    label: 'Télécharger mon CV',
    Icon: Download,
    download: true,
  },
]

export default links
