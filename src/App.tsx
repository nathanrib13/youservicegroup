import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Why } from './components/sections/Why'
import { Coverage } from './components/sections/Coverage'
import { Workforce } from './components/sections/Workforce'
import { Savings } from './components/sections/Savings'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Why />
        <Coverage />
        <Workforce />
        <Savings />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
