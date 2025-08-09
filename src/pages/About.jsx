import React from 'react'

const About = () => {
  return (
    <main id="about" className="min-h-screen bg-emerald-50/40 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Heading */}
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide mb-2">
          About Us
        </h1>
        <p className="mt-4 text-center text-lg sm:text-xl text-emerald-900/90 max-w-2xl mx-auto font-medium">
          Established in 2019, inspired by Vasudhaiva Kutumbakam – fostering an inclusive, developed society where every individual is an Earth Hero.
        </p>

        {/* Intro section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10 bg-white">
            <img
              src="https://images.unsplash.com/photo-1455218995003-77303b9a1b58?q=80&w=1600&auto=format&fit=crop"
              alt="Community working in nature"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="rounded-xl bg-white p-8 sm:p-10 shadow-lg ring-1 ring-black/10 flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl text-emerald-700 font-extrabold tracking-wide mb-3">Foundation Introduction</h2>
            <p className="text-base sm:text-lg leading-7 text-gray-700">
              Earth Heroes Foundation, established in 2019, is a Section 8 non-profit inspired by Vasudhaiva Kutumbakam ("the world is one family"). We
              foster an inclusive, developed society where every individual is an Earth Hero, empowered to live with dignity. Our work follows Sustainable
              Development Goals focused on economic growth, environmental care, and social sustainability.
            </p>
          </div>
        </div>

        {/* Vision / Mission / History */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col items-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              {/* info icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0z" /><path d="M9 9h2v6H9V9zm1-4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#1d4ed8" />
              </svg>
            </div>
            <h3 className="text-center text-xl font-extrabold text-blue-600 mb-2">Vision</h3>
            <p className="text-center text-base sm:text-lg leading-7 text-gray-700">
              We envision a future with reduced poverty, inclusive growth, and empowered women and youth. We promote inclusion,
              celebrate cultural diversity, and creatively tackle global challenges—building a fair, vibrant, sustainable world aligned with SDGs.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col items-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
              {/* heart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M12 21s-6.716-4.455-9.193-8.1C.5 9.7 2.1 6 5.5 6 7.6 6 9 7.4 12 10c3-2.6 4.4-4 6.5-4 3.4 0 5 3.7 2.7 6.9C18.716 16.545 12 21 12 21z" />
              </svg>
            </div>
            <h3 className="text-center text-xl font-extrabold text-green-600 mb-2">Mission</h3>
            <p className="text-center text-base sm:text-lg leading-7 text-gray-700">
              We enrich the nation's socio-economic and cultural landscape through diverse projects. By creating livelihoods, empowering women and youth,
              and protecting the environment, we positively impact society.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col items-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              {/* book icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M6 4h10a4 4 0 014 4v12a1 1 0 01-1.447.894L16 20.118l-2.553.776A1 1 0 0112 20V6H6a2 2 0 000 4h6" />
              </svg>
            </div>
            <h3 className="text-center text-xl font-extrabold text-purple-600 mb-2">History</h3>
            <p className="text-center text-base sm:text-lg leading-7 text-gray-700">
              Initially focused on farmers and agriculture, Earth Heroes Foundation now addresses poverty, education, health, and environment through
              community-based, culturally sensitive initiatives and strategic partnerships.
            </p>
          </div>
        </div>

        {/* Leadership Profiles */}
        <h2 className="mt-20 text-center text-3xl sm:text-4xl text-emerald-700 font-extrabold tracking-wide mb-6">
          Leadership Profiles
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Profile 1 */}
          <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col">
            <div className="flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop"
                alt="Hasini Reddy Ravula"
                className="h-20 w-20 rounded-full object-cover ring-2 ring-emerald-200"
              />
              <div>
                <h3 className="text-xl font-extrabold text-emerald-700">Hasini Reddy Ravula</h3>
                <p className="text-sm text-gray-500">Co-Founder & Chairman</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-700">
              Hasini is a committed policy consultant, educator, and advocate for sustainability, social justice, and community empowerment. She leads key
              initiatives in environmental education, climate action, and women's leadership development, including 'EcoGuardians' and 'EmpowerHer'.
            </p>
          </div>

          {/* Profile 2 */}
          <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col">
            <div className="flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
                alt="Naresh Kumar Jajula"
                className="h-20 w-20 rounded-full object-cover ring-2 ring-emerald-200"
              />
              <div>
                <h3 className="text-xl font-extrabold text-emerald-700">Naresh Kumar Jajula</h3>
                <p className="text-sm text-gray-500">Founder & President</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-700">
              Naresh is a social entrepreneur passionate about cultural and environmental revival. Combining grassroots activism with expertise in education,
              psychology, and law, he leads a global movement connecting communities and institutions for sustainable impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About