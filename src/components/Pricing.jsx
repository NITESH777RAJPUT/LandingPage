const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] tracking-widest uppercase text-sm">
            Area & Pricing
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Choose Your <span className="text-[#D4AF37]">Perfect Home</span>
          </h2>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div
            className="bg-white border border-gray-200 rounded-2xl p-8
                       hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]
                       transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">2 BHK</h3>
            <p className="text-gray-600 mb-6">Smartly designed homes</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 750 – 820 sq.ft</li>
              <li>• Spacious Living & Dining</li>
              <li>• Modular Kitchen</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 95 Lakhs*
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 w-full text-center
                         bg-[#D4AF37] text-gray-900
                         py-3 rounded-full font-semibold
                         hover:bg-[#E6C75A] transition"
            >
              Enquire Now
            </a>
          </div>

          {/* CARD 2 (HIGHLIGHTED) */}
          <div
            className="bg-white border-2 border-[#D4AF37]
                       rounded-2xl p-8 shadow-lg
                       md:scale-105"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">3 BHK</h3>
            <p className="text-gray-600 mb-6">Premium family residences</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 1050 – 1200 sq.ft</li>
              <li>• Large Balcony</li>
              <li>• Premium Finishes</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 1.35 Cr*
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 w-full text-center
                         bg-[#D4AF37] text-gray-900
                         py-3 rounded-full font-semibold
                         hover:bg-[#E6C75A] transition"
            >
              Enquire Now
            </a>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-white border border-gray-200 rounded-2xl p-8
                       hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]
                       transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">4 BHK</h3>
            <p className="text-gray-600 mb-6">Luxury living spaces</p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Carpet Area: 1450+ sq.ft</li>
              <li>• Private Deck</li>
              <li>• Exclusive Floor</li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#D4AF37]">
                ₹ 1.95 Cr*
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 w-full text-center
                         bg-[#D4AF37] text-gray-900
                         py-3 rounded-full font-semibold
                         hover:bg-[#E6C75A] transition"
            >
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
