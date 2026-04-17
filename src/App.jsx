import { Navbar } from "./layout/Navbar"
import { Hero, About, Contact, Experience, Testimonials, Projects } from "./sections/Hero"

function App() {

  return (<div className="min-h-screen overflow-x-hidden">
    {/* <Navbar/> */}
    <main>
      <Hero/>
      <About/>
      <Contact/>
      <Experience/>
      <Testimonials/>
      <Projects/>
    </main>
  </div>
  )
}

export default App
