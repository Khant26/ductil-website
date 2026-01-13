// src/components/Footer.jsx
import ductilLogo from '../assets/Ductil-G.gif'; // ← your Ductil logo (preferably transparent PNG)

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-8 border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT COLUMN - Logo + Slogan + Social + General Email */}
          <div className="space-y-8">
            <div>
              <img
                src={ductilLogo}
                alt="DUCTIL"
                className="h-12 md:h-25 w-20 md:w-70 mb-1 -ml-7"
              />
              <p className="text-lg font-light text-gray-500 tracking-wide -mt-7">
                HiTech for your Concrete®
              </p>
            </div>

            {/* Social media icons - horizontal */}
            <div className="flex items-center gap-6 text-2xl">
              <a href="#" className="hover:text-[#0D9FB4] transition-colors">
                <span className="sr-only">Facebook</span>f
              </a>
              <a href="#" className="hover:text-[#0D9FB4] transition-colors">
                <span className="sr-only">Instagram</span>instagram
              </a>
              <a href="#" className="hover:text-[#0D9FB4] transition-colors">
                <span className="sr-only">LinkedIn</span>in
              </a>
              <a href="#" className="hover:text-[#0D9FB4] transition-colors">
                <span className="sr-only">Twitter/X</span>twitter
              </a>
              <a href="#" className="hover:text-[#0D9FB4] transition-colors">
                <span className="sr-only">YouTube</span>youtube
              </a>
            </div>

            <div className="font-oswald text-lg">
              <a 
                href="mailto:info@ductil.com" 
                className="font-oswald hover:text-[#0D9FB4] transition-colors"
              >
                info@ductil.com
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
            {/* Germany */}
            <div>
              <h3 className="text-2xl font-semibold text-[#0D9FB4] mb-4">
                Contact
              </h3>
              <p className="font-oswald text-gray-300 leading-relaxed">
                Ductil GmbH<br />
                Breedeneyer Str. 2B<br />
                45133 Essen<br />
                Germany
              </p>
              <p className="font-oswald mt-4">
                Email: 
                <a 
                  href="mailto:ralf@ductil.com" 
                  className="font-oswald text-gray-300 hover:text-[#0D9FB4] transition-colors ml-2"
                >
                  ralf@ductil.com
                </a>
              </p>
            </div>

            {/* Thailand */}
            <div className="mt-11">           
              <p className="font-oswald text-gray-300 leading-relaxed">
                Ductil Co., Ltd.<br />
                16 Soi Navamin 163 Lane 6<br />
                Ram Inthra, Khan Nayaok<br />
                Bangkok 10230<br />
                Thailand
              </p>
              <p className="font-oswald mt-4">
                Email: 
                <a 
                  href="mailto:narongkorn@ductil.com" 
                  className="font-oswald text-gray-300 hover:text-[#0D9FB4] transition-colors ml-2"
                >
                  narongkorn@ductil.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright - centered */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white-500 text-sm">
          ductil. © 2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;