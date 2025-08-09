import React from 'react'

const partners = [
  'Andhra Pradesh Government',
  'Sports Authority of India',
  'Government of Telangana',
  'Ministry of MSME',
  'SAI MEME FIT',
  'SCSC',
  'ISKCON',
  'Andhra Pradesh Creativity &\nCulture Commission',
  "Dr. Reddy's",
  'University of Hyderabad',
  'Telangana State Skill\nDevelopment Mission',
  'GHMC',
  'IGNOU',
  'Kendriya Vidyalaya Sangathan',
  'Navodaya Vidyalaya Samiti',
  'TCS',
]

const Badge = ({ label }) => (
  <div className="rounded-xl bg-white/80 backdrop-blur px-5 py-4 text-center shadow-sm ring-1 ring-emerald-100">
    <span className="whitespace-pre-line font-mono text-[15px] text-gray-700">{label}</span>
  </div>
)

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-emerald-50/70 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Our Partners
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Collaborating with leading organizations to maximize our impact and reach.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {partners.map((p) => (
            <Badge key={p} label={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection 