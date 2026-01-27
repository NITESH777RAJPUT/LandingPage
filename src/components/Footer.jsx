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

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-4xl font-bold tracking-widest">
            KUNAL GROUP
          </h2>
          <p className="text-[13px] uppercase tracking-widest font-semibold text-black/90">
            Crafted for connoisseurs of privacy, precision & prestige
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold mb-6 tracking-wider">
            QUICK LINKS
          </h3>
          <ul className="space-y-4 text-[15px] font-semibold text-black/95">
            <li>
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">Residences</a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-3 text-[15px] font-semibold text-black/95">

          {/* EMAIL */}
          <p className="flex items-center gap-3">
            <Mail size={20} />
            <a
              href="mailto:sales@kunalgroup.com"
              className="hover:underline"
            >
              sales@kunalgroup.com
            </a>
          </p>

          {/* PHONE + WHATSAPP */}
          <p className="flex items-center gap-3">
            <Phone size={20} />
            <a
              href="tel:+918080861276"
              className="hover:underline"
            >
              Soumya – 8080861276
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918080861276"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm underline"
            >
              WhatsApp
            </a>
          </p>

          <p className="flex items-center gap-3">
            <ShieldCheck size={20} />
            RERA Approved Project
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 pt-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="cursor-pointer hover:opacity-80" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="cursor-pointer hover:opacity-80" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="cursor-pointer hover:opacity-80" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-black/30"></div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-[15px] font-semibold text-black/95">
        © 2026 Kunal Group. All Rights Reserved | T&C Apply
      </div>

    </footer>
  );
};

export default Footer;
