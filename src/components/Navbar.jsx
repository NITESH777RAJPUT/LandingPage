import { Phone } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 h-[86px] flex items-center justify-between">
        <img src={logo} alt="The Canary" className="h-12" />

        <ul className="hidden lg:flex gap-10 font-semibold">
          <li><a href="#home">Home</a></li>
          <li><a href="#amenities">Amenities</a></li>
          <li><a href="#floorplans">Floor Plan</a></li>
          <li><a href="#pricing">Area & Pricing</a></li>
          <li><a href="#location">Location</a></li>
        </ul>

        <a
          href="#contact"
          className="flex items-center gap-2 bg-[#B08D3C] text-white px-7 py-3 rounded-full font-bold"
        >
          <Phone size={18} /> Enquire Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
