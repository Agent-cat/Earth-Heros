import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Function to handle scrolling to a section
  const scrollToSection = (id) => {
    setMobileOpen(false); // close menu on click
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-semibold text-gray-800"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <span className="text-emerald-600">Earth Heroes Foundation</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a
              href="#home"
              className="hover:text-gray-900"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>

            {location.pathname === "/" && (
              <>
                <a
                  href="#about"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
                <a
                  href="#campaigns"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("campaigns");
                  }}
                >
                  Campaigns
                </a>
                <a
                  href="#services"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  Services
                </a>
                <a
                  href="#events"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("events");
                  }}
                >
                  Events
                </a>
                <a
                  href="#partners"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("partners");
                  }}
                >
                  Partners
                </a>
                <a
                  href="#contact"
                  className="hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </>
            )}

            <Link to="/team" className="hover:text-gray-900">
              Team
            </Link>
          </nav>

          {/* Join Us button (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#join"
              className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition-colors text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("join");
              }}
            >
              Join Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-3 text-gray-700 text-sm">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            {location.pathname === "/" && (
              <>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a>
                <a href="#campaigns" onClick={(e) => { e.preventDefault(); scrollToSection("campaigns"); }}>Campaigns</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a>
                <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection("events"); }}>Events</a>
                <a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection("partners"); }}>Partners</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
              </>
            )}
            <Link to="/team" onClick={() => setMobileOpen(false)}>
              Team
            </Link>
            <a
              href="#join"
              className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition-colors text-sm font-medium w-full text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("join");
              }}
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
