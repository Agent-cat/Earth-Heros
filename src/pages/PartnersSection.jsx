import React from 'react';

const partners = [
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755882682/4_rs3e8c.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755882940/7_ago0ba.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883207/10_fcirmu.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883208/15_pkoyl4.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883208/11_ynw2zx.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883208/13_wyvsgn.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883208/12_hlxtdz.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883209/14_ysalml.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883215/16_vcdiyl.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883216/17_ybuozj.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883520/3_mafgvx.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883520/6_hiuva4.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755883676/Untitled_design_16_svexq6.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755882813/5_psc8fd.png' },
  { logo: 'https://res.cloudinary.com/dqcogelsh/image/upload/v1755882976/8_nfdt95.png' },
];

const Badge = ({ logo }) => (
  // Use a fixed width and height with object-cover for a "zoomed" effect
  <img src={logo} alt="" className="h-54 w-42 object-cover" />
);

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-emerald-50/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-emerald-700 tracking-wide">
          Our Partners
        </h2>
        <p className="mt-4 text-center text-emerald-900/80 max-w-3xl mx-auto">
          Collaborating with leading organizations to maximize our impact and reach.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.logo} className="flex justify-center items-center">
              <Badge logo={p.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;