// src/components/About.jsx
import ductilLogoSmall from '../assets/Ductil-W.gif';
import showcaseImage1 from '../assets/about-1.jpg';
import showcaseImage2 from '../assets/about-2.png';

const About = () => {
  return (
    <section id="about" className="bg-[#191919] text-white pt-16 lg:pt-8 pb-24 lg:pb-17">
      <div className="max-w-7xl mx-auto px-6 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE - Images */}
          <div className="relative">
            <div className="w-4/6 overflow-hidden rounded-md shadow-2xl border-2 border-white/100">
              <img
                src={showcaseImage1}
                alt="Main showcase structure"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-9 -right-8 lg:-bottom-17 lg:-right-10 w-1/2 md:w-2/5 lg:w-3/5 max-w-[380px] z-10">
              <div className="w-4/6 overflow-hidden rounded-md shadow-2xl border-2 border-white/100">
                <img
                  src={showcaseImage2}
                  alt="Overlapping showcase detail"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Text */}
          <div className="space-y-8 lg:space-y-10 lg:-ml-9">

            {/* Logo row */}
            <div className="flex items-center gap-3 mb-2">
              <img
                src={ductilLogoSmall}
                alt="Ductil"
                className="h-[72px] sm:h-[90px] md:h-[100px] w-auto object-contain -ml-4"
              />
              <div className="w-30 sm:w-30 h-0.5 bg-white/80 ml-4"></div>
            </div>

            {/* Main description */}
            <p className="
              font-monda
              text-base
              sm:text-lg
              md:text-2xl
              font-medium
              leading-relaxed
            ">
              We deliver high-tech fiber reinforced concrete solutions
              for modern construction needs.
            </p>

            {/* Bullet points */}
            <ul className="
              space-y-4
              sm:space-y-5
              md:space-y-6
              text-sm
              sm:text-base
              md:text-xl
              font-light
              text-white
            ">
              <li className="flex items-start gap-4">
                <span className="text-lg md:text-2xl leading-none mt-1">•</span>
                <span className="font-oswald tracking-wide" style={{ wordSpacing: '0.15em' }}>
                  25+ years of global engineering experience
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-lg md:text-2xl leading-none mt-1">•</span>
                <span className="font-oswald tracking-wide" style={{ wordSpacing: '0.15em' }}>
                  Custom SFRC design for tunneling segment and industrial floors
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-lg md:text-2xl leading-none mt-1">•</span>
                <span className="font-oswald tracking-wide" style={{ wordSpacing: '0.15em' }}>
                  Backed by international standards and advanced R&D
                </span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
