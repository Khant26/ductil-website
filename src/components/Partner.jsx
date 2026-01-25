// src/components/Partnership.jsx
import partnerImage from '../assets/ductil-cms.png';

const Partnership = () => {
  return (
    <section
      id="partner"
      className="
        bg-[#191919] text-white
        py-12 md:py-16 lg:py-14
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">

          {/* LEFT - Text Content */}
          <div className="lg:col-span-4 space-y-5 md:space-y-6">

            {/* Title + underline */}
            <div className="
              flex flex-col
              md:flex-row md:items-center md:gap-4
            ">
              <h2
                className="
                  font-monda font-bold tracking-tight uppercase
                  text-2xl
                  md:text-3xl
                  lg:text-4xl
                  leading-snug
                  whitespace-normal md:whitespace-nowrap
                "
              >
                Partnership with CMS Company
              </h2>

              {/* Line */}
              <div className="
                mt-3
                md:mt-0
                w-30
                h-0.5
                bg-white/80
              "></div>
            </div>

            {/* Description */}
            <p className="
              font-monda
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-medium
              leading-relaxed
            ">
              DUCTIL collaborates with CMS Company as a strategic partner to deliver
              advanced fibre reinforced concrete solutions for a wide range of
              construction applications.
            </p>

            <p className="
              font-monda
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-medium
              leading-relaxed
            ">
              This partnership strengthens product reliability, technical support,
              and project execution by combining DUCTIL&apos;s expertise in steel and
              micro steel fibre reinforcement with CMS&apos;s industry experience.
            </p>
          </div>

          {/* RIGHT - Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="
              max-w-[140px]
              md:max-w-[150px]
              lg:max-w-[170px]
            ">
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
