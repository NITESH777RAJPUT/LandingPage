const Location = () => {
  return (
    <section
      id="location"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
          Prime <span className="text-[#D4AF37]">Location</span>
        </h2>

        {/* ⚠️ IMPORTANT: transform-none + filter-none */}
        <div className="relative z-0 transform-none filter-none">
          <div
            className="
              w-full
              h-[260px]
              sm:h-[360px]
              lg:h-[420px]
              rounded-2xl
              overflow-hidden
              border border-gray-200
              shadow-md
              bg-gray-100
            "
          >
            <iframe
              title="Balewadi Pune Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.457302838857!2d73.77993337501163!3d18.57280928253307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b96c9b89a1d9%3A0x6f7a0e0c3c8b8c8!2sBalewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
