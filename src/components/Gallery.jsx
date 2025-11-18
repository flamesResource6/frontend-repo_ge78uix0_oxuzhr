import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/gallery`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio</h2>
          <p className="text-cyan-100/80">A few highlights from recent shoots</p>
        </div>
      </div>

      {loading ? (
        <p className="text-cyan-100/80">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((img, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/40">
              <img src={img.url} alt={img.title || 'Gallery image'} className="aspect-video object-cover w-full transition-transform duration-300 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="text-sm opacity-90">{img.category}</div>
                <div className="font-semibold">{img.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery
