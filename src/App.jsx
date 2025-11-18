import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%)] pointer-events-none" />
      <div className="relative">
        <Hero />
        <Gallery />
        <Booking />
        <Footer />
      </div>
    </div>
  )
}

export default App
