function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 py-10 text-cyan-100/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SkyLift Aerials. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#book" className="hover:text-white">Book</a>
          <a href="#gallery" className="hover:text-white">Portfolio</a>
          <a href="mailto:hello@skylift.example" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
