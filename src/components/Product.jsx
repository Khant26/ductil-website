// src/components/Products.jsx
import warehouseBg from '../assets/product-bg.jpg'; // same style as hero background (warehouse interior)
import steelFiberImg from '../assets/steel-fiber.jpg'; // Steel fiber product image
import microSteelFiberImg from '../assets/micro-steel-fiber.jpg'; // Micro steel fiber product image

const Products = () => {
  return (
    <section
      id="product"
      className="relative py-15 lg:py-15 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${warehouseBg})` }}
    >
      {/* Overlay - same as hero (cyan/teal dark filter with 65% opacity) */}
      <div className="absolute inset-0 bg-cyan-900/65"></div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-16 text-center text-white">
        <h2 className="font-monda text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight uppercase mb-6">
          Our Specialized FRC Products
        </h2>

        <p className="font-monda text-xl md:text-2xl font-light max-w-4xl mx-auto mb-16 leading-relaxed">
          Advanced fiber reinforcement solutions designed to enhance concrete performance,
          durability, and structural reliability.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Steel Fiber Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
            <div className="p-8 lg:p-10">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img
                  src={steelFiberImg}
                  alt="Steel Fiber"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-cyan-300">
                Steel Fiber
              </h3>

              <p className="text-lg md:text-xl font-light text-gray-200">
                Heavy-duty steel reinforcement that enhances load capacity,
                impact resistance, and crack control for industrial floors
                and structural applications.
              </p>
            </div>
          </div>

          {/* Micro Steel Fiber Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700">
            <div className="p-8 lg:p-10">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img
                  src={microSteelFiberImg}
                  alt="Micro Steel Fiber"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-cyan-300">
                Micro Steel Fiber
              </h3>

              <p className="text-lg md:text-xl font-light text-gray-200">
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