import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const EventsSection = () => {
  const [startIndex, setStartIndex] = useState(0)

  const youtubeVideos = [
    "https://www.youtube.com/embed/trMyTABr5DU?si=cvh4uQ5JuSCvkiHP",
    "https://www.youtube.com/embed/G0tOdwUsa_0?si=lLtVswOTyyLmEVEc",
    "https://www.youtube.com/embed/9NfCjq-oyqI?si=DYjSbF0otjINcnqp",
  ]

  const instagramPosts = [
    "https://www.instagram.com/p/DLKOYZUPC53/embed",
    "https://www.instagram.com/p/DLVVGS1zl08/embed",
    "https://www.instagram.com/p/DJHp7m8yLtM/embed",
    "https://www.instagram.com/p/DKWemQGPl66/embed",
    "https://www.instagram.com/p/DLVVGS1zl08/embed",
    "https://www.instagram.com/p/DJHp7m8yLtM/embed",
  ]

  const postsPerPage = 4
  const visiblePosts = instagramPosts.slice(startIndex, startIndex + postsPerPage)

  const nextPosts = () => {
    if (startIndex + postsPerPage < instagramPosts.length) {
      setStartIndex(startIndex + postsPerPage)
    }
  }

  const prevPosts = () => {
    if (startIndex - postsPerPage >= 0) {
      setStartIndex(startIndex - postsPerPage)
    }
  }

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-white to-emerald-50/70 scale-110"
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

          {/* Row of 4 posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {visiblePosts.map((post, i) => (
              <iframe
                key={i}
                src={post}
                className="w-[250px] h-[300px] rounded-lg shadow-md"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
              ></iframe>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex justify-center gap-8 mt-6">
            <button
              onClick={prevPosts}
              className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextPosts}
              className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition disabled:opacity-50"
              disabled={startIndex + postsPerPage >= instagramPosts.length}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
