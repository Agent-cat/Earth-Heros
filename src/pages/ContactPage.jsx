import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold">
          Get in Touch
        </h2>
        <p className="mt-4 text-center text-lg max-w-3xl mx-auto">
          Ready to join our mission? We'd love to hear from you and explore how
          we can work together.
        </p>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {/* Email */}
          <div>
            <div className="flex justify-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v.35l10 6.25L22 6.35V6a2 2 0 00-2-2zm0 4.05l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2z" />
                </svg>
              </div>
            </div>
            <h4 className="mt-4 font-bold">Email</h4>
            <p>info@earthheroesfoundation.org</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex justify-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.21 2.22z" />
                </svg>
              </div>
            </div>
            <h4 className="mt-4 font-bold">Phone</h4>
            <p>+91 9701038140</p>
          </div>

          {/* Website */}
          <div>
            <div className="flex justify-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-emerald-700 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V20a8 8 0 01-1 0v-.07A8 8 0 014 12a8 8 0 018-8v.07A8 8 0 0119.93 12 8 8 0 0113 19.93z" />
                </svg>
              </div>
            </div>
            <h4 className="mt-4 font-bold">Website</h4>
            <p>www.earthheroesfoundation.org</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;