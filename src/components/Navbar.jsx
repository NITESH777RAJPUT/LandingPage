import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "Amenities", link: "#amenities" },
    { label: "Floor Plan", link: "#floorplan" },
    { label: "Pricing", link: "#pricing" },
    { label: "Location", link: "#location" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="The Canary"
          className="h-9 sm:h-10 object-contain"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-900 font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="hover:text-[#D4AF37] transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 bg-[#D4AF37] text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-[#E6C75A] transition"
        >
          <Phone size={16} />
          Enquire
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-900"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white/95 backdrop-blur px-6 py-6 space-y-6 border-t border-gray-200">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-gray-900 text-lg font-medium hover:text-[#D4AF37] transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#D4AF37] text-gray-900 py-3 rounded-full font-semibold hover:bg-[#E6C75A] transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
