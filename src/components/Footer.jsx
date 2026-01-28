import {
  ShieldCheck,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {
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
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] font-semibold text-black/95">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#pricing" className="hover:underline">Residences</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4 text-sm sm:text-[15px] font-semibold text-black/95 text-center md:text-left">

          
          {/* PHONE + WHATSAPP */}
          <div className="flex items-center justify-center md:justify-start gap-4">

            {/* CALL */}
            <a
              href="tel:+918080861276"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={18} />
              <span>9022721434</span>
            </a>

            {/* WHATSAPP ICON ONLY */}
            <a
              href="https://wa.me/918080861276"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="#25D366"   // ✅ WhatsApp green
              >
                <path d="M12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.9.5 3.76 1.45 5.39L2 22l4.82-1.26c1.57.86 3.35 1.32 5.22 1.32h.01c5.49 0 9.96-4.47 9.96-9.96 0-2.66-1.03-5.16-2.91-7.04A9.9 9.9 0 0 0 12.04 2zm0 18.04c-1.63 0-3.22-.44-4.61-1.28l-.33-.2-2.86.75.76-2.78-.22-.35a8.01 8.01 0 0 1-1.28-4.22c0-4.42 3.6-8.02 8.03-8.02 2.14 0 4.15.83 5.66 2.35a7.94 7.94 0 0 1 2.34 5.67c0 4.42-3.6 8.02-8.03 8.02zm4.41-5.98c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.45c-.16 0-.42.06-.64.3-.22.24-.83.82-.83 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.59 4.1 3.63.57.25 1.02.4 1.38.5.57.18 1.09.15 1.5.1.46-.07 1.41-.58 1.61-1.12.2-.54.2-1 .14-1.12-.06-.12-.22-.18-.46-.3z" />
              </svg>
            </a>

          </div>

          {/* RERA */}
          <p className="flex items-center justify-center md:justify-start gap-3">
            <ShieldCheck size={18} />
            RERA Approved Project
          </p>

          {/* SOCIAL ICONS */}
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

      {/* DIVIDER */}
      <div className="border-t border-black/30"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center text-xs sm:text-[15px] font-semibold text-black/95">
        © 2026 Kunal Group. All Rights Reserved | T&amp;C Apply
      </div>
    </footer>
  );
};

export default Footer;
