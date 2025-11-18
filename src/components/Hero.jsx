import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 text-sm mb-4">
            Aerial Photo & Video • Mapping • Inspections
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Elevate your brand with cinematic drone imagery
          </h1>
          <p className="mt-4 text-cyan-100/90 text-lg">
            Professional FAA-certified remote pilot capturing stunning visuals for real estate, events, construction, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => navigate('#book')} className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors">Book an appointment</button>
            <button onClick={() => navigate('#gallery')} className="px-6 py-3 rounded-lg border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 transition-colors">View portfolio</button>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1600&auto=format&fit=crop" alt="Drone flying over coast" className="rounded-2xl shadow-2xl border border-white/10" />
          <div className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-white/10 text-cyan-100">
            <p className="text-sm">4K HDR • Licensed & Insured • Quick Turnaround</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
