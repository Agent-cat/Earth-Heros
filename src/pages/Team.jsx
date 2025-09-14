import React, { useState, useEffect } from "react";

const LeadershipProfiles = () => {
  const leaders = [
    {
      name: "Hasini Reddy Ravula",
      role: "Co-Founder & Chairman",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=688,fit=crop,trim=283.76525821596243;90.4326923076923;682.244131455399;0/d95r3VzW8gu62Gpo/whatsapp-image-2024-03-05-at-12.25.46-pm-mxB8ooVoXNUE1Kk4.jpeg",
      bio: "Hasini is a committed policy consultant, educator, and advocate for sustainability, social justice, and community empowerment. She leads key initiatives in environmental education, climate action, and women's leadership development, including 'EcoGuardians' and 'EmpowerHer'.",
    },
    {
      name: "Naresh Kumar Jajula",
      role: "Founder & President",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=683,fit=crop,trim=10.846938775510203;0;336.2551020408163;0/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-11-at-10.50.46-pm-Yyv2PN1v1pFeN1yV.jpeg",
      bio: "Naresh is a social entrepreneur passionate about cultural and environmental revival. Combining grassroots activism with expertise in education, psychology, and law, he leads a global movement connecting communities and institutions for sustainable impact.",
    },
    {
      name: "Amal Kiran Taae",
      role: "Founder & Advisor",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=683,fit=crop,trim=562.6828282828283;0;393.050505050505;136.5/d95r3VzW8gu62Gpo/whatsapp-image-2024-09-12-at-2.29.30-pm-m6LJBv1k5XteNRwz.jpeg",
      bio: "",
    },
  ];

  const coreTeam = [
    {
      name: "Arjun Reddy",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=65.63636363636363;55.27272727272727;642.5454545454546;27.636363636363637/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-23-at-10.14.58-am-AzGDXZGOqDUqNJoM.jpeg",
    },
    {
      name: "Muktheshwar ",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=297,fit=crop,trim=130.82872928176795;0;477.34806629834253;0/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-23-at-10.26.52-am-mk35vr8xbbTB7Jg4.jpeg",
    },
    {
      name: "Neemelia ",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=290,fit=crop,trim=0;0;578.4270516717326;0/d95r3VzW8gu62Gpo/whatsapp_image_2024-02-23_at_9.34.45_pm-removebg-preview-YBgybqJvvZip9ag0.png",
    },
    {
      name: "Mounika",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=33.19502074688796;0;298.7551867219917;0/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-23-at-11.13.38-am-AwvP4W6EE6uO32gO.jpeg",
    },
    {
      name: "Ramesh Goud",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=297,fit=crop,trim=77.67457627118644;94.01754385964912;134.90847457627117;112.41228070175438/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-23-at-10.32.13-am-A1arP2KNw2IDLkoK.jpeg",
    },
    {
      name: "Thilak Bellamkonda",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=298,fit=crop,trim=13.188571428571429;14.817490494296578;250.58285714285714;24.695817490494296/d95r3VzW8gu62Gpo/1699748007219-mxB84WyDyeFD679R.jfif",
    },
    {
      name: "Mahesh Yadav",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=193.1758530183727;146.88524590163934;604.7244094488188;125.90163934426229/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-23-at-10.11.28-am-AE0vP6eDnBHPqz96.jpeg",
    },
    {
      name: "Mounika Darapaneni",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=0;0;18.35148514851485;0/d95r3VzW8gu62Gpo/whatsapp_image_2024-02-24_at_12.08.49_am-removebg-preview-ALpbyyEy1VcGX8e5.png",
    },
    {
      name: "Rithvik Banka ",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=0;0;448.13278008298755;0/d95r3VzW8gu62Gpo/img_2349-Yyv20Bx9kJFjg3GW.JPG",
    },
    {
      name: "Pavan Jonnalagadda",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=39.11111111111111;0;561.7777777777778;0/d95r3VzW8gu62Gpo/whatsapp-image-2024-02-23-at-11.02.03-pm-Aq2NJlMaV7sp4jZM.jpeg",
    },
    {
      name: "Venkat Vuddagiri",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=905.2941176470589;313.6764705882353;496.3235294117647;353.38235294117646/d95r3VzW8gu62Gpo/whatsapp-image-2024-09-01-at-10.11.38-pm-AVLb6Lpk0VfK6N78.jpeg",
    },
    {
      name: "Kavati Bhansi Naidu",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=30;0;215;0/d95r3VzW8gu62Gpo/bhansi-naidu-mxBXzGxaBEIv75od.jpeg",
    },
    {
      name: "Khaja Cheemakurthi",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=251.298755186722;14.145251396648046;263.68672199170123;194.49720670391062/d95r3VzW8gu62Gpo/kajaha-AoPJD76K22ska3O5.jpeg",
    },
    {
      name: "Chandrika Jamana",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=128;0;596.3636363636364;0/d95r3VzW8gu62Gpo/chandrika-AzGNOvXZ0vtqllJZ.jpeg",
    },
    {
      name: "Prudhvi Yendluri",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=299,fit=crop,trim=384.35754189944134;129.36802973977694;362.0111731843576;0/d95r3VzW8gu62Gpo/prudhivi-YD0wr7e5agc4Nq63.jpeg",
    },
  ];

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil(coreTeam.length / itemsPerPage);

  // Update itemsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      // Set to 4 for desktop (md and up), 1 for mobile (sm and down)
      setItemsPerPage(window.innerWidth >= 768 ? 4 : 1);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedCore = coreTeam.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section id="team" className="mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl text-emerald-700 font-extrabold tracking-wide mb-10">
        Leadership Profiles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-6">
              <img
                src={leader.image}
                alt={leader.name}
                className="h-20 w-20 rounded-full object-cover ring-2 ring-emerald-200"
              />
              <div>
                <h3 className="text-xl font-extrabold text-emerald-700">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-500">{leader.role}</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-700">
              {leader.bio}
            </p>
          </div>
        ))}
      </div>
      <hr />
      
      <h2 className="text-center text-3xl sm:text-4xl text-emerald-700 font-extrabold tracking-wide my-10">
        Our Team
      </h2>
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {displayedCore.map((member, idx) => (
            <div
              key={idx}
              className="relative w-full overflow-hidden rounded-xl shadow-lg"
              style={{ minHeight: "250px" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-emerald-700 p-1 text-center">
                <h3 className="text-sm font-semibold text-white">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        {totalPages > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeadershipProfiles;
