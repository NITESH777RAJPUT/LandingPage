import { Download } from "lucide-react";

const BrochureCTA = () => {
    const openEnquiry = () => {
        window.__DOWNLOAD_BROCHURE__ = true;
        document.dispatchEvent(new Event("open-enquiry"));
    };

    return (
        <section className="relative py-14 sm:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">

                {/* LUXURY BORDER */}
                <div className="relative rounded-[28px] p-[2.5px]
          bg-gradient-to-br from-[#FFF3D6] via-[#F5E6B8] to-[#EBD39A]">

                    {/* MAIN CARD */}
                    <div
                        className="
              bg-gradient-to-br from-[#C9A24D] to-[#B08D3C]
              rounded-[26px]
              px-6 sm:px-10 py-10 sm:py-12
              text-center
              shadow-[0_25px_60px_rgba(176,141,60,0.45)]
            "
                    >
                        <p className="text-white/90 text-xs sm:text-sm tracking-widest uppercase">
                            Official Project Brochure
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                            3 & 4 BHK Luxury Residences
                        </h3>

                        <p className="text-white/90 text-sm sm:text-base mt-2">
                            Starting from <b className="text-white">₹ 1.89 Cr*</b>
                        </p>

                        <div className="w-16 sm:w-20 h-[2px] sm:h-[3px]
              bg-white/80 mx-auto my-6 rounded-full" />

                        <button
                            onClick={openEnquiry}
                            className="
                inline-flex items-center justify-center gap-3
                bg-white
                text-[#9C7A24]
                px-8 sm:px-10 py-3 sm:py-4
                rounded-full
                font-bold
                text-sm sm:text-base
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                transition-all duration-300
              "
                        >
                            <Download size={20} />
                            Download Brochure
                        </button>

                        <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/90">
                            ✔ Detailed Floor Plans &nbsp; ✔ Pricing &nbsp; ✔ Amenities
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrochureCTA;
