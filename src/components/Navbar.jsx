import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-gray-800">
            <span className="text-emerald-600">Earth Heroes Foundation</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#campaigns" className="hover:text-gray-900">Campaigns</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#events" className="hover:text-gray-900">Events</a>
            <a href="#partners" className="hover:text-gray-900">Partners</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#join" className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition-colors text-sm font-medium">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar