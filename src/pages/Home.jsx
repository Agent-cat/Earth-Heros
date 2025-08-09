import React from 'react'
import About from './About'
import ProjectsSection from './ProjectsSection'
import CampaignsSection from '../components/CampaignsSection'
import ServicesSection from './ServicesSection'
import EventsSection from '../components/EventsSection'
import PartnersSection from './PartnersSection'
import Joinus from './Joinus'
import ContactPage from './ContactPage'
const Home = () => {
  return (
    <main className='overflow-x-hidden ' id="home">
      <section className="relative scale-110 w-full h-screen flex items-center justify-center bg-gradient-to-br  from-emerald-600 via-teal-500 to-emerald-400 text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <p className="text-center tracking-wide text-md sm:text-xl font-medium opacity-90">
            Creating a sustainable future into the ever-widening thought and action
          </p>

          <h1 className="mt-6 text-center text-4xl sm:text-7xl font-extrabold">
            Earth Heroes Foundation
          </h1>

          <p className="mt-6 text-center text-base sm:text-xl font-medium">
            Non-Profit & Non-Governmental Section 8 Company
          </p>

          <p className="mt-3 text-center italic text-sm sm:text-base opacity-90">
            Inspired by Vasudhaiva Kutumbakam – the world is one family
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="rounded-md bg-white text-emerald-700 px-5 py-3 font-semibold shadow-sm hover:bg-gray-100">
              Our Projects
            </a>
            <a href="#join" className="rounded-md bg-yellow-300 text-emerald-900 px-5 py-3 font-semibold shadow-sm hover:bg-yellow-400">
              Become a Member
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-emerald-900/90">
            <a href="#campaigns" className="rounded-md bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30">Our Campaigns</a>
            <a href="#become-member" className="rounded-md bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30">Become a Member</a>
            <a href="#events" className="rounded-md bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30">Events</a>
            <a href="#partners" className="rounded-md bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30">Our Partners</a>
            <a href="#contact" className="rounded-md bg-white/20 backdrop-blur px-4 py-2 text-white hover:bg-white/30">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24" >
        <About/>
      </section>
      <ProjectsSection/>
      <CampaignsSection/>
      <ServicesSection/>
      <EventsSection/>
      <PartnersSection/>
      <ContactPage/>
      <Joinus/>
      
    </main>
  )
}

export default Home