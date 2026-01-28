const Location = () => {
  return (
    <section id="location" className="py-24 bg-[#0B1C2D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Prime <span className="text-[#D4AF37]">Location</span>
        </h2>

        <div className="h-72 md:h-96 rounded-xl overflow-hidden border border-white/20">
          <iframe
            title="Balewadi Location"
            src="https://www.google.com/maps?q=Balewadi,Pune,Maharashtra&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
