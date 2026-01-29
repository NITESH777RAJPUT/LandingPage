import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import FloorPlans from "../components/FloorPlans";
import Pricing from "../components/Pricing";
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import ReraSection from "../components/ReraSection";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 🔔 Popup on page load (once per session)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("enquiryShown")) {
        setShowModal(true);
        sessionStorage.setItem("enquiryShown", "true");
      }
    }, 3000);

    // 🔔 Popup on scroll end (once per session)
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 200 &&
        !sessionStorage.getItem("scrollEnquiryShown")
      ) {
        setShowModal(true);
        sessionStorage.setItem("scrollEnquiryShown", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* ENQUIRY MODAL */}
      <EnquiryModal open={showModal} onClose={() => setShowModal(false)} />

      {/* MAIN CONTENT */}
      <main className="pt-[72px] sm:pt-[80px]">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="amenities">
          <Amenities />
        </section>

        <section id="floorplans">
          <FloorPlans />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="location">
          <Location />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* ✅ RERA / LEGAL SECTION */}
      <ReraSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
