import React from 'react'

const CalendarIcon = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M7 2a1 1 0 00-1 1v1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3h-1V3a1 1 0 10-2 0v1H8V3a1 1 0 00-1-1zM4 10h16v9a1 1 0 01-1 1H5a1 1 0 01-1-1V10z" />
    </svg>
  </div>
)

const events = [
  'Essay & drawing competitions',
  'Food and blanket drives (incl. Hyderabad police collaboration)',
  'Cycling drives with FitIndia Mission',
  'Walkathons and anti-drug campaigns',
  'Student culture camps',
  'Health awareness sessions (e.g., Good Touch Bad Touch)',
  'MSME Lean Scheme workshops',
  'Civil service exam orientation and career guidance',
  'Cleanliness drives with GHMC',
  'Leadership and SDG workshops',
]

const EventsSection = () => {
  // Split into two balanced columns like the screenshot
  const mid = Math.ceil(events.length / 2)
  const left = events.slice(0, mid)
  const right = events.slice(mid)

  const Item = ({ text }) => (
    <div className="flex items-center gap-4 rounded-2xl bg-white/75 backdrop-blur px-5 py-4 shadow-sm ring-1 ring-emerald-100">
      <CalendarIcon />
      <p className="font-mono text-[15px] text-gray-700">{text}</p>
    </div>
  )

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-emerald-50/70 scale-110">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Events & Activities
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Engaging community events and activities that drive positive change and awareness.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {left.map((t) => (
              <Item key={t} text={t} />
            ))}
          </div>
          <div className="space-y-6">
            {right.map((t) => (
              <Item key={t} text={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection 