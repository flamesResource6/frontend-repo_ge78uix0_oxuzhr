import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Real Estate',
    preferred_date: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Thanks! We\'ll be in touch shortly.' })
      setForm({ name: '', email: '', phone: '', service: 'Real Estate', preferred_date: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="book" className="bg-slate-900/60 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Book an appointment</h2>
        <p className="text-cyan-100/80 mb-8">Tell us a bit about your project and preferred timing.</p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-cyan-100 mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Jane Doe" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-cyan-100 mb-2">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="jane@email.com" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-cyan-100 mb-2">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="(555) 123-4567" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-cyan-100 mb-2">Preferred Date</label>
            <input name="preferred_date" type="date" value={form.preferred_date} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-cyan-100 mb-2">Service</label>
            <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Real Estate</option>
              <option>Events</option>
              <option>Construction</option>
              <option>Inspections</option>
              <option>Mapping</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-cyan-100 mb-2">Project details</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Location, scope, deadlines, etc." />
          </div>
          <div className="md:col-span-2">
            <button disabled={submitting} className="w-full md:w-auto px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors disabled:opacity-60">
              {submitting ? 'Sending...' : 'Send request'}
            </button>
          </div>
        </form>

        {status && (
          <div className={`mt-4 p-3 rounded-lg border ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-200 border-emerald-400/30' : 'bg-rose-500/10 text-rose-200 border-rose-400/30'}`}>
            {status.message}
          </div>
        )}
      </div>
    </section>
  )
}

export default Booking
