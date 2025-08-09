
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(ellipse_at_top,rgba(16,24,39,0.95),#0b1220)] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <h3 className="font-mono text-xl font-bold text-gray-100">Earth Heroes Foundation</h3>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              Inspired by Vasudhaiva Kutumbakam – the world is one family. Creating a sustainable future
              through community empowerment and environmental stewardship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-lg font-semibold text-gray-100">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-mono text-lg font-semibold text-gray-100">Get Involved</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#join" className="hover:text-white">Become a Member</a></li>
              <li><a href="#campaigns" className="hover:text-white">Make a Donation</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          Copyright © EHF 2019–2025. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer