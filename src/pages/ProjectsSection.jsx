import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../constants/constants'

const Icon = ({ name, className }) => {
  switch (name) {
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 21s-6.716-4.455-9.193-8.1C.5 9.7 2.1 6 5.5 6 7.6 6 9 7.4 12 10c3-2.6 4.4-4 6.5-4 3.4 0 5 3.7 2.7 6.9C18.716 16.545 12 21 12 21z" />
        </svg>
      )
    case 'building':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M3 21h18v-2H3v2zm2-4h2V7H5v10zm4 0h2V3H9v14zm4 0h2V7h-2v10zm4 0h2V3h-2v14z" />
        </svg>
      )
    case 'education':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      )
    case 'people':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.06 1.16.84 1.97 1.97 1.97 3.44V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      )
    case 'tree':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C9.243 2 7 4.243 7 7h2a3 3 0 016 0h2c0-2.757-2.243-5-5-5zM6 13l4-4 2 2 2-2 4 4-3 3h3l-5 6-5-6h3l-3-3z" />
        </svg>
      )
    case 'water':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2S5 9 5 14a7 7 0 0014 0C19 9 12 2 12 2zm0 18a5 5 0 01-5-5c0-2.8 3.3-6.86 5-8.73C13.7 8.14 17 12.2 17 15a5 5 0 01-5 5z" />
        </svg>
      )
    default:
      return null
  }
}

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/60 to-white scale-110" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Our Projects
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Discover our initiatives. Click on any project to see detailed reports, ongoing activities, and galleries.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="rounded-xl bg-white px-6 py-8 shadow-lg ring-1 ring-black/10">
              <div className="flex flex-col items-center">
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-${p.color}-100 text-${p.color}-600`}>
                  <Icon name={p.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-extrabold tracking-wider text-gray-800">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{p.subtitle}</p>
                <Link
                  to={`/projects/${p.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-emerald-700 hover:to-green-700"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 