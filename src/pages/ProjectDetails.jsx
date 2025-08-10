import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../constants/constants'
import { CheckCircle, Target, Users } from 'lucide-react'

const ProjectDetails = () => {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-gray-700">Project not found.</p>
          <Link to="/" className="font-semibold text-emerald-600 underline">
            Go back home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-green-50/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">About the Project</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{project.about}</p>
            </div>

            <div className="mt-8 rounded-xl bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">Key Activities & Reports</h2>
              <ul className="mt-4 space-y-3">
                {project.activities?.map((activity, index) => (
                  <li key={index} className="flex items-start text-lg text-gray-700">
                    <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {activity} <Link to="#" className="font-semibold text-blue-600 hover:underline">[Read More]</Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg">
              <Target className="mx-auto h-12 w-12 text-green-600" />
              <h3 className="mt-4 text-2xl font-bold text-gray-800">Our Goal</h3>
              <p className="mt-2 text-lg text-gray-600">{project.goal}</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-8 text-center shadow-lg">
              <Users className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-2xl font-bold text-gray-800">Get Involved</h3>
              <p className="mt-2 text-lg text-gray-600">Join us as a volunteer or partner to make a difference.</p>
              <button className="mt-6 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mt-16">
          <h2 className="text-center text-4xl font-bold text-gray-800">Project Gallery</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery?.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="font-semibold text-white">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails
