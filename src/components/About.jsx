// src/components/About.jsx
import ductilLogoSmall from '../assets/Ductil-W.gif';  // small logo version used in about section
import showcaseImage1 from '../assets/about-1.jpg';     // the tall modern building image
import showcaseImage2 from '../assets/about-2.png'; // the illuminated water feature / pool image

const About = () => {
  return (
    <section id="about" className="bg-[#191919] text-white py-24 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE - Images (bigger + overlapping smaller) */}
          <div className="relative">
            {/* Bigger main image */}
            <div className="w-4/6 overflow-hidden rounded-md shadow-2xl border-2 border-white/100">
              <img
                src={showcaseImage1}
                alt="Main showcase structure"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Smaller overlapping image */}
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

          {/* RIGHT SIDE - Text Content */}
          <div className="space-y-10 lg:-ml-8">
            {/* DUCTIL heading + small logo */}
            <div className="flex items-center gap-4">
              <img
                src={ductilLogoSmall}
                alt="Ductil"
                className="h-18 w-auto object-contain opacity-100"
              />
            </div>

            {/* Main description */}
            <p className="font-monda text-2xl md:text-2xl font-medium leading-relaxed">
              We deliver high-tech fiber reinforced concrete solutions 
              for modern construction needs.
            </p>
            {/* Bullet points */}
            <ul className="space-y-6 text-lg md:text-l font-light text-gray-300">
              <li className="font-oswald flex items-start gap-4">
                <span className="text-white-300 text-2xl leading-none mt-1">•</span>
                <span>25+ years of global engineering experience</span>
              </li>
              <li className="font-oswald flex items-start gap-4">
                <span className="text-white-300 text-2xl leading-none mt-1">•</span>
                <span>Custom FRC design for industrial floors, high-rise, and foundations</span>
              </li>
              <li className="font-oswald flex items-start gap-4">
                <span className="text-white-300 text-2xl leading-none mt-1">•</span>
                <span>Backed by international standards and advanced R&D</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;