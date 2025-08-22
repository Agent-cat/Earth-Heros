import React from 'react'

const Progress = ({ value }) => (
  <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
    <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${value}%` }} />
  </div>
)

const Card = ({ title, blurb, raised, goal, link }) => (
  <div className="rounded-xl bg-white/80 backdrop-blur p-5 shadow-lg ring-1 ring-black/10">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{blurb}</p>
    <Progress value={Math.min(100, Math.round((raised / goal) * 100))} />
    <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
      <span>Raised: ${raised.toLocaleString()}</span>
      <span>Goal: ${goal.toLocaleString()}</span>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block w-full rounded-md bg-blue-500 px-4 py-2 text-center text-white text-sm font-semibold hover:bg-blue-600"
    >
      Donate Now
    </a>
  </div>
)

const CampaignsSection = () => {
  return (
    <section id="campaigns" className="py-20 bg-gradient-to-b from-white to-emerald-50/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Fundraising Campaigns
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Support our projects and make a difference. Every contribution helps us create a better world.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Clean Water for All"
            blurb="Providing clean water filters to rural schools."
            raised={2340}
            goal={5000}
            link="https://razorpay.me/@earthheroesfoundation"
          />
          <Card
            title="Digital Literacy Drive"
            blurb="Equipping students with essential digital skills."
            raised={6120}
            goal={8000}
            link="https://razorpay.me/@earthheroesfoundation"
          />
          <Card
            title="Food Donation Drive"
            blurb="Our ongoing initiative fights hunger every day."
            raised={4500}
            goal={7000}
            link="https://razorpay.me/@earthheroesfoundation"
          />
          <Card
            title="Dog Feeding & Animal Care"
            blurb="Volunteers feed, care, protect dogs."
            raised={3800}
            goal={6000}
            link="https://razorpay.me/@earthheroesfoundation"
          />
          <Card
            title="Daily Basic Necessities"
            blurb="Providing clothes, kits, blankets, aid"
            raised={7200}
            goal={10000}
            link="https://razorpay.me/@earthheroesfoundation"
          />
          <Card
            title="Elderly Care & Support"
            blurb="Supporting elderly with care programs."
            raised={5100}
            goal={7500}
            link="https://razorpay.me/@earthheroesfoundation"
          />
          <Card
            title="Government School Adoption"
            blurb="Empowering children through school adoption."
            raised={5100}
            goal={7500}
            link="https://razorpay.me/@earthheroesfoundation"
          />
        </div>
      </div>
    </section>
  )
}

export default CampaignsSection
