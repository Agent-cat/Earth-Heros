import React from "react"

const EventsSection = () => {
  const youtubeVideos = [
    "https://www.youtube.com/embed/trMyTABr5DU?si=cvh4uQ5JuSCvkiHP",
    "https://www.youtube.com/embed/G0tOdwUsa_0?si=lLtVswOTyyLmEVEc",
    "https://www.youtube.com/embed/9NfCjq-oyqI?si=DYjSbF0otjINcnqp",
  ]

  // Only 4 Instagram posts
  const instagramPosts = [
    "https://www.instagram.com/p/DLKOYZUPC53/embed",
    "https://www.instagram.com/p/DLVVGS1zl08/embed",
    "https://www.instagram.com/p/DJHp7m8yLtM/embed",
    "https://www.instagram.com/p/DKWemQGPl66/embed",
  ]

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-white to-emerald-50/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Events & Activities
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Explore our latest YouTube videos and Instagram posts showcasing
          community events and activities.
        </p>

        {/* YouTube Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
            🎥 YouTube Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((src, i) => (
              <iframe
                key={i}
                className="w-full aspect-video rounded-xl shadow-md"
                src={src}
                title={`YouTube video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
            📸 Instagram Posts
          </h3>

          {/* Responsive grid: 1 → 2 → 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {instagramPosts.map((post, i) => (
              <iframe
                key={i}
                src={post}
                className="w-full max-w-[220px] h-[280px] rounded-lg shadow-md"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
