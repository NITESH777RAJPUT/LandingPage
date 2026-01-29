import rera1 from "../assets/rera/rera1.png";
import rera2 from "../assets/rera/rera2.png";
import rera3 from "../assets/rera/rera3.png";

const ReraSection = () => {
    return (
        <section className="bg-white py-16 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                {/* TITLE */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-wider">
                        THE <span className="text-[#D4AF37]">CANARY</span>
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Authorized Preferred Partner | <b>Balewadi, Pune</b>
                    </p>
                </div>

                {/* ✅ QR CODES (3 ALWAYS VISIBLE) */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-items-center mb-10">
                    <img
                        src={rera1}
                        alt="RERA QR 1"
                        className="w-24 sm:w-44"
                    />
                    <img
                        src={rera2}
                        alt="RERA QR 2"
                        className="w-24 sm:w-44"
                    />
                    <img
                        src={rera3}
                        alt="RERA QR 3"
                        className="w-24 sm:w-44"
                    />
                </div>

                {/* RERA NUMBERS */}
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    Kunal The Canary MahaRERA –
                    <span className="block mt-1">
                        P52100031557 | P52100051845 | P52100051845
                    </span>
                </p>

                {/* DISCLAIMER */}
                <p className="mt-6 text-xs sm:text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
                    Disclaimer: We are an authorised marketing partner for this project.
                    Provided content is given by respective owners and this website and
                    content is for information purpose only and it does not constitute
                    any offer to avail for any services. Prices mentioned are subject to
                    change without prior notice and properties mentioned are subject to
                    availability. You can expect a call, SMS or emails on details
                    registered with us.
                </p>

            </div>
        </section>
    );
};

export default ReraSection;
