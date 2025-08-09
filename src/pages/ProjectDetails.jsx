import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../constants/constants'

const ProjectDetails = () => {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-700">Project not found.</p>
          <Link to="/" className="text-emerald-600 font-semibold underline">Go back home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-emerald-50/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12 py-16">
        <Link to="/" className="text-emerald-700 hover:underline">← Back to Home</Link>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900">{project.title}</h1>
        <p className="mt-1 text-gray-600">{project.subtitle}</p>

        <div className="mt-8 rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10">
          <p className="text-gray-700 leading-7">{project.description}</p>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails 