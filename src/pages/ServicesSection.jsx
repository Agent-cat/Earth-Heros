import React from 'react'

const Icon = ({ name }) => {
  const base = 'h-6 w-6 text-white'
  switch (name) {
    case 'book':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M4 5a2 2 0 012-2h11a1 1 0 011 1v16a1 1 0 01-1.447.894L15 19.118l-2.553.776A1 1 0 0111 19V5H6a2 2 0 00-2 2v12a1 1 0 11-2 0V7a4 4 0 014-4z" />
        </svg>
      )
    case 'bulb':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M12 2a7 7 0 00-4 12.732V18a2 2 0 002 2h4a2 2 0 002-2v-3.268A7 7 0 0012 2zM9 20h6v2H9z" />
        </svg>
      )
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M12 21s-6.716-4.455-9.193-8.1C.5 9.7 2.1 6 5.5 6 7.6 6 9 7.4 12 10c3-2.6 4.4-4 6.5-4 3.4 0 5 3.7 2.7 6.9C18.716 16.545 12 21 12 21z" />
        </svg>
      )
    case 'target':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 16a6 6 0 116-6 6.006 6.006 0 01-6 6zm0-8a2 2 0 102 2 2 2 0 00-2-2z" />
        </svg>
      )
    case 'ribbon':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M12 2a7 7 0 00-4 12.9V22l4-2 4 2v-7.1A7 7 0 0012 2z" />
        </svg>
      )
    case 'cap':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={base}>
          <path d="M12 3L1 9l11 6 11-6-11-6zm0 8.7L5.74 8.2 12 4.8l6.26 3.4L12 11.7zM5 13v4a2 2 0 002 2h10v-2H7v-4z" />
        </svg>
      )
    default:
      return null
  }
}

const services = [
  {
    icon: 'book',
    color: 'from-blue-500 to-indigo-600',
    title: 'Student Activity Centre (SAC)',
    text: 'Encourages leadership and active student involvement.'
  },
  {
    icon: 'bulb',
    color: 'from-indigo-500 to-purple-600',
    title: 'Catalyst Hub',
    text: 'Supports social enterprises and ESG startups with mentorship and impact scaling.'
  },
  {
    icon: 'heart',
    color: 'from-sky-500 to-blue-600',
    title: 'Employee Wellness Center',
    text: 'Promotes wellbeing through art, culture, and heritage.'
  },
  {
    icon: 'target',
    color: 'from-cyan-500 to-teal-600',
    title: 'Sustainable Mapping',
    text: 'Creates tailored solutions by discovering strengths.'
  },
  {
    icon: 'ribbon',
    color: 'from-violet-500 to-fuchsia-600',
    title: 'Conscious Brand Accelerator',
    text: 'Launches sustainable, ethical products.'
  },
  {
    icon: 'cap',
    color: 'from-blue-600 to-indigo-700',
    title: 'Experiential Learning',
    text: 'Leadership and sustainability training, bootcamps, and workshops.'
  }
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-emerald-50/70 to-white scale-110">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Our Services
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Comprehensive services designed to empower communities and drive sustainable change.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg ring-1 ring-black/10">
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.color}`}>
                  <Icon name={s.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-gray-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 