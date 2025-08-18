import React from "react";
import { projects } from "../constants/constants";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 text-white">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Explore our initiatives that make a difference in society.
          </p>
        </div>

        {/* Project Grid - 5 cards per row */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative flex flex-col items-center rounded-xl bg-white text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[300px] p-5"
            >
             {/* Logo */}
<div className="flex-grow flex items-center justify-center">
  <img
    src={p.logo}
    alt={`${p.title} logo`}
    className="max-h-[130px] max-w-full object-contain transform transition-transform duration-500 group-hover:scale-125"
  />
</div>


              {/* Title + Subtitle */}
              <div className="mt-4 text-center flex-shrink-0">
                <h3 className="text-lg font-bold text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
              </div>

              {/* Link */}
              <div className="mt-3 text-center">
                <Link
                  to={`/projects/${p.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
