// src/components/Partnership.jsx
import partnerImage from '../assets/CMS-Ductil.jpg'; // ← your specific image for the right side
// Could be CMS logo, joint logo, DUCTIL logo with "S" symbol, or partnership illustration

const Partnership = () => {
  return (
    <section id="partner" className="bg-[#191919] text-white py-24 lg:py-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* LEFT - Text Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Title with underline */}
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-3 whitespace-nowrap">
                Partnership with CMS Company
              </h2>
              
            </div>

            {/* Main description */}
            <p className="font-monda text-lg md:text-xl font-medium leading-relaxed">
              DUCTIL collaborates with CMS Company as a strategic partner to deliver
              advanced fibre reinforced concrete solutions for a wide range of
              construction applications.
            </p>

            <p className="font-monda text-lg md:text-xl font-medium leading-relaxed">
              This partnership strengthens product reliability, technical support,
              and project execution by combining DUCTIL's expertise in steel and
              micro steel fibre reinforcement with CMS's industry experience.
            </p>
          </div>

          {/* RIGHT - Single partner image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="max-w-[200px] lg:max-w-[280px]">
              <img
                src={partnerImage}
                alt="Partnership with CMS Company"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partnership;