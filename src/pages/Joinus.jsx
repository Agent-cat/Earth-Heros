import React, { useState } from 'react'

const Joinus = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    reason: ''
  })

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    alert('Application submitted! (Demo)')
    setForm({ name: '', email: '', phone: '', address: '', skills: '', reason: '' })
  }

  return (
    <section id="join" className="py-20 bg-gradient-to-b from-white to-emerald-50/70 ">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Become a Member
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Join our community to receive newsletters, event invites, volunteer opportunities, and voting participation.
        </p>

        <form onSubmit={submit} className="mt-10 rounded-2xl bg-white/80 backdrop-blur p-8 shadow-xl ring-1 ring-emerald-100">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M12 12a5 5 0 10-5-5 5 5 0 005 5zm-7 9a7 7 0 0114 0v1H5z" />
            </svg>
          </div>

          <h3 className="text-center text-xl font-extrabold text-gray-800">Membership Application</h3>
          <p className="mt-1 text-center text-xs text-gray-500">Join the Earth Heroes family and make a difference</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input value={form.name} onChange={update('name')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input type="email" value={form.email} onChange={update('email')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input value={form.phone} onChange={update('phone')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input value={form.address} onChange={update('address')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700">Skills/Interests</label>
            <textarea value={form.skills} onChange={update('skills')} rows={3} placeholder="Tell us about your skills, interests, and how you'd like to contribute..." className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700">Reason for Joining *</label>
            <textarea value={form.reason} onChange={update('reason')} rows={3} placeholder="Why do you want to join Earth Heroes Foundation?" className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>

          <button type="submit" className="mt-6 w-full rounded-md bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 text-white font-semibold">
            Submit Application →
          </button>
        </form>
      </div>
    </section>
  )
}

export default Joinus