import React from "react"

const EventsSection = () => {
  const youtubeVideos = [
    "https://www.youtube.com/embed/trMyTABr5DU?si=cvh4uQ5JuSCvkiHP",
    "https://www.youtube.com/embed/G0tOdwUsa_0?si=lLtVswOTyyLmEVEc",
    "https://www.youtube.com/embed/9NfCjq-oyqI?si=DYjSbF0otjINcnqp",
  ]

  // Instagram posts (image + link to post)
  const instagramPosts = [
    {
      image:
        "https://res.cloudinary.com/dqcogelsh/image/upload/v1758292910/insta2_wd7qkv.jpg", // direct image
      link: "https://www.instagram.com/earthheroesfoundation/?igsh=aGV5eWt1eDY1bHk5#",
    },
    {
      image:
        "https://res.cloudinary.com/dqcogelsh/image/upload/v1758292909/insta1_rgtkii.jpg",
      link: "https://www.instagram.com/earthheroesfoundation/?igsh=aGV5eWt1eDY1bHk5#",
    },
    {
      image:
        "https://res.cloudinary.com/dqcogelsh/image/upload/v1758292909/insta3_yzbneg.jpg",
      link: "https://www.instagram.com/earthheroesfoundation/?igsh=aGV5eWt1eDY1bHk5#",
    },
    {
      image:
        "https://res.cloudinary.com/dqcogelsh/image/upload/v1758292910/insta4_u3w2q8.jpg",
      link: "https://www.instagram.com/earthheroesfoundation/?igsh=aGV5eWt1eDY1bHk5#",
    },
   
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
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full max-w-[220px] h-[280px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
