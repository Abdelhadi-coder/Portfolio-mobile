import Navbar from './components/Navbar'
import Hero from './sections/Hero'
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
      <main className="pt-20"> {/* Padding top pour que le contenu ne soit pas caché sous la navbar */}
        <Hero />
        <section id="projects" className="min-h-screen p-8 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
        </section>
        <section id="skills" className="min-h-screen p-8 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
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