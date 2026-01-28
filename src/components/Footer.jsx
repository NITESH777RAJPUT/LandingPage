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

          <p className="flex items-center justify-center md:justify-start gap-3">
            <Mail size={18} />
            <a href="mailto:sales@kunalgroup.com" className="hover:underline">
              sales@kunalgroup.com
            </a>
          </p>

          <p className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
            <Phone size={18} />
            <a href="tel:+918080861276" className="hover:underline">
              Soumya – 8080861276
            </a>
            <a
              href="https://wa.me/918080861276"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline"
            >
              WhatsApp
            </a>
          </p>

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
