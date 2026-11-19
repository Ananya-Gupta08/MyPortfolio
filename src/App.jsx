import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
// import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="skills">
        <Skills />
      </section>
      <section id="writing" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">Writing</h2>
          <div className="mx-auto mt-6 mb-8 h-[3px] w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #3b0207 0%, #b52a00 35%, #ff9f1a 65%, #fff98a 100%)' }} />
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            I also write about what I learn — sharing ideas, discoveries, and lessons from my journey in tech on DEV Community.
          </p>
          <a href="https://dev.to/ananyagupta08" target="_blank" rel="noopener noreferrer" className="inline-flex mt-8 px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            Read my writing on DEV
          </a>
          <p className="mt-4 text-sm text-gray-600">@ananyagupta08</p>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App

