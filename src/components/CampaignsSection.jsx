import React, { useState } from 'react'

const Progress = ({ value }) => (
  <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
    <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${value}%` }} />
  </div>
)

const Card = ({ title, blurb, raised, goal, colorFrom, colorTo }) => (
  <div className="rounded-xl bg-white/80 backdrop-blur p-5 shadow-lg ring-1 ring-black/10">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{blurb}</p>
    <Progress value={Math.min(100, Math.round((raised / goal) * 100))} />
    <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
      <span>Raised: ${raised.toLocaleString()}</span>
      <span>Goal: ${goal.toLocaleString()}</span>
    </div>
    <button
      type="button"
      className={`mt-4 w-full rounded-md bg-gradient-to-r from-${colorFrom}-500 to-${colorTo}-600 px-4 py-2 text-center text-white text-sm font-semibold hover:from-${colorFrom}-600 hover:to-${colorTo}-700`}
    >
      Donate Now
    </button>
  </div>
)

const CampaignsSection = () => {
  const [title, setTitle] = useState('')
  const [goal, setGoal] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle('')
    setGoal('')
    setDesc('')
    alert('Campaign submitted! (Demo)')
  }

  return (
    <section id="campaigns" className="py-20 bg-gradient-to-b from-white to-emerald-50/70 scale-110">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Fundraising Campaigns
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Support our projects or launch your own campaign to make a difference. Every contribution helps us create a better world.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="Clean Water for All"
            blurb="Providing clean water filters to rural schools."
            raised={2340}
            goal={5000}
            colorFrom="emerald"
            colorTo="green"
          />
          <Card
            title="Digital Literacy Drive"
            blurb="Equipping students with essential digital skills."
            raised={6120}
            goal={8000}
            colorFrom="blue"
            colorTo="indigo"
          />
        </div>

        <h3 className="mt-16 text-center text-2xl sm:text-3xl font-extrabold text-gray-800">
          Start Your Own Campaign
        </h3>
        <p className="mt-2 text-center text-sm text-gray-600 max-w-2xl mx-auto">
          Empower your community by creating a fundraising campaign for a cause you care about.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 mx-auto max-w-3xl rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg ring-1 ring-black/10">
          <label className="block text-sm font-medium text-gray-700">Campaign Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Tree Plantation Drive"
            className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <label className="mt-4 block text-sm font-medium text-gray-700">Fundraising Goal ($)</label>
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g., 1500"
            className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <label className="mt-4 block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tell us about your campaign..."
            rows={4}
            className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 text-white font-semibold hover:from-emerald-700 hover:to-green-700"
          >
            Launch Campaign
          </button>
        </form>
      </div>
    </section>
  )
}

export default CampaignsSection 