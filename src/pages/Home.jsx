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

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Popup on page load
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("enquiryShown")) {
        setShowModal(true);
        sessionStorage.setItem("enquiryShown", "true");
      }
    }, 3000);

    // Popup on scroll end
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
    <>
      <Navbar />
      <EnquiryModal open={showModal} onClose={() => setShowModal(false)} />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT (optional, stays after home) */}
      <section id="about">
        <About />
      </section>

      {/* AMENITIES */}
      <section id="amenities">
        <Amenities />
      </section>

      {/* FLOOR PLANS */}
      <section id="floorplans">
        <FloorPlans />
      </section>

      {/* AREA & PRICING */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* LOCATION */}
      <section id="location">
        <Location />
      </section>

      {/* CONTACT / ENQUIRE */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Home;
