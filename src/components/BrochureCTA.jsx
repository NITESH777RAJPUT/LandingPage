import { Download } from "lucide-react";

const BrochureCTA = () => {
    const openEnquiry = () => {
        // 🔥 Mark brochure intent
        window.__DOWNLOAD_BROCHURE__ = true;

        // 🔔 Open enquiry modal
        document.dispatchEvent(new Event("open-enquiry"));
    };

    return (
        <section className="bg-white py-10">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-[#B08D3C] rounded-2xl p-6 text-center shadow-lg">

                    <p className="text-white/90 text-sm">
                        Spacious 3 & 4 BHK Starts
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-2">
                        ₹ 1.69 Cr* Onwards
                    </h3>

                    <button
                        onClick={openEnquiry}
                        className="inline-flex items-center gap-2 mt-6 bg-white text-[#B08D3C] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        <Download size={18} />
                        Download Brochure
                    </button>

                </div>
            </div>
        </section>
    );
};

export default BrochureCTA;
