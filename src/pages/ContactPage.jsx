import React, { useState } from 'react'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' })

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
    setForm({ name: '', email: '', subject: 'General', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50/70 to-white scale-110">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Contact Us
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          We d love to hear from you. Reach out with questions, collaboration ideas, or to volunteer.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-gray-800">Get in touch</h3>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>
                </span>
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p>Earth Heroes Foundation, Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20 4H4a2 2 0 00-2 2v.35l10 6.25L22 6.35V6a2 2 0 00-2-2zm0 4.05l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2z"/></svg>
                </span>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:hello@earthheroes.org" className="text-emerald-700 hover:underline">hello@earthheroes.org</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.21 2.22z"/></svg>
                </span>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:+919999999999" className="text-emerald-700 hover:underline">+91 99999 99999</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg ring-1 ring-emerald-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input value={form.name} onChange={update('name')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={form.email} onChange={update('email')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <select value={form.subject} onChange={update('subject')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400">
                  <option>General</option>
                  <option>Volunteering</option>
                  <option>Partnerships</option>
                  <option>Donations</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={5} value={form.message} onChange={update('message')} className="mt-2 w-full rounded-md border border-gray-200 bg-yellow-100/70 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
            </div>
            <button type="submit" className="mt-5 w-full rounded-md bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 text-white font-semibold">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage