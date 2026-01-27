const Location = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Prime <span className="text-[#C9A24D]">Location</span>
        </h2>

        {/* GOOGLE MAP */}
        <div className="h-72 md:h-96 rounded-xl overflow-hidden border">
          <iframe
            title="Balewadi Location"
            src="https://www.google.com/maps?q=Balewadi,Pune,Maharashtra&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
