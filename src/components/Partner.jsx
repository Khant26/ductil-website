// src/components/Partnership.jsx
import partnerImage from '../assets/ductil-cms.png'; // ← your specific image for the right side
// Could be CMS logo, joint logo, DUCTIL logo with "S" symbol, or partnership illustration

const Partnership = () => {
  return (
    <section id="partner" className="bg-[#191919] text-white py-24 lg:py-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* LEFT - Text Content */}
          <div className="lg:col-span-4 space-y-8">
            {/* Title with underline */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-monda text-4xl md:text-4xl font-bold tracking-tight uppercase whitespace-nowrap">
                Partnership with CMS Company
              </h2>
              <div className="w-30 h-0.5 bg-white/80 ml-10"></div>
            </div>

            {/* Main description */}
            <p className="font-monda text-lg md:text-xl font-light leading-relaxed">
              DUCTIL collaborates with CMS Company as a strategic partner to deliver
              advanced fibre reinforced concrete solutions for a wide range of
              construction applications.
            </p>

            <p className="font-monda text-lg md:text-xl font-light leading-relaxed">
              This partnership strengthens product reliability, technical support,
              and project execution by combining DUCTIL's expertise in steel and
              micro steel fibre reinforcement with CMS's industry experience.
            </p>
          </div>

          {/* RIGHT - Single partner image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="max-w-[170px] lg:max-w-auto">
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