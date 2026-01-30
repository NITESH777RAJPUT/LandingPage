const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] tracking-widest uppercase text-sm">
            4 Ways to Own Your Serenity
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Choose Your <span className="text-[#D4AF37]">Perfect Home</span>
          </h2>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition">
            <h3 className="text-xl font-semibold mb-2">Heaven</h3>
            <p className="text-sm text-gray-500 mb-4">3 BHK Residences</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 1150 – 1250 sq.ft.</li>
              <li>• Efficient Layout</li>
              <li>• Premium Specifications</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Price Range</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 1.89 – 2.21 Cr*
              </p>
            </div>

            <a href="#contact" className="mt-6 block text-center bg-[#D4AF37] py-3 rounded-full font-semibold hover:bg-[#E6C75A] transition">
              Enquire Now
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition">
            <h3 className="text-xl font-semibold mb-2">Tranquil</h3>
            <p className="text-sm text-gray-500 mb-4">Spacious 3 BHK</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 1350 – 1450 sq.ft.</li>
              <li>• Large Living Spaces</li>
              <li>• Enhanced Privacy</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Price Range</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 2.25 – 2.49 Cr*
              </p>
            </div>

            <a href="#contact" className="mt-6 block text-center bg-[#D4AF37] py-3 rounded-full font-semibold hover:bg-[#E6C75A] transition">
              Enquire Now
            </a>
          </div>

          {/* 🔥 CARD 3 – MOST PREMIUM */}
          <div className="relative bg-white border-2 border-[#D4AF37] rounded-2xl p-8 shadow-[0_0_35px_rgba(212,175,55,0.35)] md:scale-105">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-xs font-bold px-4 py-1 rounded-full">
              MOST PREMIUM
            </span>

            <h3 className="text-xl font-semibold mb-2">Elysium</h3>
            <p className="text-sm text-gray-500 mb-4">3 BHK Duplex</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 1500 – 1600 sq.ft.</li>
              <li>• Duplex Living</li>
              <li>• Exclusive Experience</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Price Range</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 2.49 – 2.79 Cr*
              </p>
            </div>

            <a href="#contact" className="mt-6 block text-center bg-[#D4AF37] py-3 rounded-full font-semibold hover:bg-[#E6C75A] transition">
              Enquire Now
            </a>
          </div>

          {/* 🏆 CARD 4 – ULTRA LUXURY */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition">
            <h3 className="text-xl font-semibold mb-2">Signature</h3>
            <p className="text-sm text-gray-500 mb-4">Ultra Luxury 4 BHK</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 1679 sq.ft.</li>
              <li>• Grand Living Spaces</li>
              <li>• Elite Privacy & Scale</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 2.74 Cr*
              </p>
            </div>

            <a href="#contact" className="mt-6 block text-center bg-[#D4AF37] py-3 rounded-full font-semibold hover:bg-[#E6C75A] transition">
              Enquire Now
            </a>
          </div>

        </div>

        {/* DISCLAIMER */}
        <p className="text-center text-xs text-gray-500 mt-12">
          *Prices are indicative and subject to change without prior notice.
        </p>

      </div>
    </section>
  );
};

export default Pricing;
