import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "Amenities",
    "Floor Plan",
    "Pricing",
    "Location",
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#0B1C2D]
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      "
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-[86px] flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="The Canary"
          className="
            h-9 sm:h-10 md:h-12
            object-contain
            brightness-125
            contrast-125
          "
        />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-10 font-semibold text-white">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-[#D4AF37] transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="
            hidden md:flex items-center gap-2
            bg-[#D4AF37] text-[#0B1C2D]
            px-6 py-2.5 rounded-full
            font-bold
            hover:bg-[#E6C75A]
            transition
          "
        >
          <Phone size={18} />
          Enquire
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#0B1C2D] border-t border-white/10">
          <ul className="flex flex-col px-6 py-6 gap-6 text-white font-semibold">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#D4AF37] transition"
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className="
                mt-4 bg-[#D4AF37] text-[#0B1C2D]
                px-6 py-3 rounded-full
                font-bold text-center
                hover:bg-[#E6C75A]
                transition
              "
            >
              Enquire Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
