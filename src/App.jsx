import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SupportSystem from './components/SupportSystem'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <SupportSystem />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
