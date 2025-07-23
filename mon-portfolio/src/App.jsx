import BackgroundParticles from './components/BackgroundParticles'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
// import ThemeToggle from './components/ThemeToggle';
// import About from './sections/About'
// import Projects from './sections/Projects'
// import Skills from './sections/Skills'
// import Contact from './sections/Contact'
// import Footer from './sections/Footer'

function App() {

  return (
    <>
      <Navbar />
      <BackgroundParticles />
      <main className="pt-20">
        <Hero />
        <section id="projects" className="min-h-screen p-8 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Mes Projets</h2>
          <Projects />
        </section>
         <section id="projects" className="min-h-screen p-8 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Mes Skills</h2>
          <Skills />
        </section>
        <section id="contact" className="min-h-screen p-8 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
        </section>
      </main>
      {/* <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App