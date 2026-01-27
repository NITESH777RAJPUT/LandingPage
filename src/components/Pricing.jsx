const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <p className="text-[#B08D3C] tracking-widest uppercase text-sm">
            Area & Pricing
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Choose Your Perfect Home
          </h2>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="border rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">2 BHK</h3>
            <p className="text-gray-500 mb-6">Smartly designed homes</p>

            <ul className="space-y-3 text-gray-700">
              <li>• Carpet Area: 750 – 820 sq.ft</li>
              <li>• Spacious Living & Dining</li>
              <li>• Modular Kitchen</li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#B08D3C]">
                ₹ 95 Lakhs*
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 w-full text-center bg-[#B08D3C] text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Enquire Now
            </a>
          </div>

          {/* CARD 2 (HIGHLIGHTED) */}
          <div className="border-2 border-[#B08D3C] rounded-2xl p-8 shadow-lg scale-105">
            <h3 className="text-xl font-semibold mb-4">3 BHK</h3>
            <p className="text-gray-500 mb-6">Premium family residences</p>

            <ul className="space-y-3 text-gray-700">
              <li>• Carpet Area: 1050 – 1200 sq.ft</li>
              <li>• Large Balcony</li>
              <li>• Premium Finishes</li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#B08D3C]">
                ₹ 1.35 Cr*
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 w-full text-center bg-[#B08D3C] text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Enquire Now
            </a>
          </div>

          {/* CARD 3 */}
          <div className="border rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">4 BHK</h3>
            <p className="text-gray-500 mb-6">Luxury living spaces</p>

            <ul className="space-y-3 text-gray-700">
              <li>• Carpet Area: 1450+ sq.ft</li>
              <li>• Private Deck</li>
              <li>• Exclusive Floor</li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Starting Price</p>
              <p className="text-2xl font-bold text-[#B08D3C]">
                ₹ 1.95 Cr*
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-6 w-full text-center bg-[#B08D3C] text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Enquire Now
            </a>
          </div>

        </div>

        {/* DISCLAIMER */}
        <p className="text-center text-xs text-gray-400 mt-10">
          *Prices are indicative and subject to change without prior notice.
        </p>

      </div>
    </section>
  );
};

export default Pricing;
