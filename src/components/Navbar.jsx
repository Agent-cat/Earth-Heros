import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle scrolling to a section
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/", { replace: false });
      // Delay scrolling to wait for page render
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

            {/* Show these only on homepage */}
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

            {/* Separate Team page */}
            <Link to="/team" className="hover:text-gray-900">
              Team
            </Link>
          </nav>

          <div className="flex items-center gap-3">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
