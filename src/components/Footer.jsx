import {
  ShieldCheck,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {

  // 🔥 SAFE CALL HANDLER
  const handleCallClick = () => {
    // modal / overlays close (global safe)
    document.dispatchEvent(new Event("close-enquiry"));

    // Chrome mobile repaint fix after call
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  };

  return (
    <footer className="bg-[#B08D3C] text-black">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest">
            KUNAL GROUP
          </h2>
          <p className="text-xs sm:text-[13px] uppercase tracking-widest font-semibold text-black/90">
            Crafted for connoisseurs of privacy, precision & prestige
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 tracking-wider">
            QUICK LINKS
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] font-semibold">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#pricing" className="hover:underline">Residences</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4 text-sm sm:text-[15px] font-semibold text-center md:text-left">

          {/* PHONE + WHATSAPP */}
          <div className="flex items-center justify-center md:justify-start gap-4">

            {/* ✅ SAFE CALL LINK */}
            <a
              href="tel:+919022721434"
              onClick={handleCallClick}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={18} />
              <span>9022721434</span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919022721434"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="
    flex items-center gap-2
    px-4 py-2
    border border-black/40
    rounded-full
    text-sm font-semibold
    hover:bg-black/10
    transition
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#25D366"
              >
                <path d="M12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.9.5 3.76 1.45 5.39L2 22l4.82-1.26c1.57.86 3.35 1.32 5.22 1.32h.01c5.49 0 9.96-4.47 9.96-9.96 0-2.66-1.03-5.16-2.91-7.04A9.9 9.9 0 0 0 12.04 2z" />
              </svg>

              <span>WhatsApp</span>
            </a>

          </div>

          {/* RERA */}
          <p className="flex items-center justify-center md:justify-start gap-3">
            <ShieldCheck size={18} />
            RERA Approved Project
          </p>

          {/* SOCIAL */}
          <div className="flex justify-center md:justify-start gap-5 pt-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:opacity-80" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:opacity-80" />
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-black/30" />
      <div className="text-center py-6 text-xs sm:text-[15px] font-semibold">
        © 2026 Kunal Group. All Rights Reserved | T&amp;C Apply
      </div>
    </footer>
  );
};

export default Footer;
