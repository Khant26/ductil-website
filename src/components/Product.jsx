// src/components/Products.jsx
import warehouseBg from '../assets/product-bg.jpg';
import steelFiberImg from '../assets/steel-fiber.jpg';
import microSteelFiberImg from '../assets/micro-steel-fiber.jpg';

const Products = () => {
  return (
    <section
      id="product"
      className="
        relative
        pt-12 lg:pt-10
        pb-16 lg:pb-12
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${warehouseBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-cyan-900/65"></div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-16 text-center text-white">

        {/* SM ONLY (line above title) */}
        <div className="sm:hidden mb-3 flex justify-center">
          <div className="h-0.5 bg-white/80 rounded-full w-30"></div>
        </div>

        {/* Title row */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="hidden sm:block h-0.5 bg-white/80 rounded-full w-10 sm:w-30"></div>

          <h2 className="font-monda text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight uppercase">
            Our Specialized FRC Products
          </h2>
        </div>

        <p className="font-monda text-base sm:text-lg md:text-2xl font-medium max-w-4xl mx-auto mb-8 leading-relaxed">
          Advanced fiber reinforcement solutions designed to enhance concrete performance,
          durability, and structural reliability.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Steel Fiber Card */}
          <div className="bg-[#0D9FB4]/25 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
            <div className="px-8 lg:px-10 pt-8 pb-6">
              <div className="aspect-[4/3] overflow-hidden rounded-md mb-6">
                <img src={steelFiberImg} alt="Steel Fiber" className="w-full h-full object-cover" />
              </div>

              <h3 className="font-monda text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                Steel Fiber
              </h3>

              <p className="font-oswald text-sm sm:text-base md:text-xl font-light text-gray-200 tracking-wide"
                 style={{ wordSpacing: '0.15em' }}>
                Heavy-duty steel reinforcement that enhances load capacity,
                impact resistance, and crack control for industrial floors
                and structural applications.
              </p>
            </div>
          </div>

          {/* Micro Steel Fiber Card */}
          <div className="bg-[#0D9FB4]/25 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
            <div className="px-8 lg:px-10 pt-8 pb-6">
              <div className="aspect-[4/3] overflow-hidden rounded-md mb-6">
                <img src={microSteelFiberImg} alt="Micro Steel Fiber" className="w-full h-full object-cover" />
              </div>

              <h3 className="font-monda text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                Micro Steel Fiber
              </h3>

              <p className="font-oswald text-sm sm:text-base md:text-xl font-light text-gray-200 tracking-wide"
                 style={{ wordSpacing: '0.15em' }}>
                Fine steel fibres designed for superior shrinkage control,
                surface durability, and uniform reinforcement in slabs
                and high-rise structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
