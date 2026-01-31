import { useEffect, useState, useRef } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutKunalGroup from "../components/AboutKunalGroup";
import Amenities from "../components/Amenities";
import FloorPlans from "../components/FloorPlans";
import BrochureCTA from "../components/BrochureCTA";
import Pricing from "../components/Pricing";
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";
import ReraSection from "../components/ReraSection";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const topTriggered = useRef(false);
  const bottomTriggered = useRef(false);
  const loadTriggered = useRef(false);

  useEffect(() => {
    /* 🔥 OPEN MODAL FROM ANYWHERE (BROCHURE CTA) */
    const openHandler = () => setShowModal(true);
    document.addEventListener("open-enquiry", openHandler);

    /* 🔔 FIRST PAGE LOAD POPUP */
    if (!loadTriggered.current) {
      setTimeout(() => {
        setShowModal(true);
        loadTriggered.current = true;
      }, 2000); // 2 sec delay (premium feel)
    }

    /* 🔔 SCROLL LOGIC */
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // 🔝 TOP REACHED
      if (scrollTop === 0 && !topTriggered.current) {
        setShowModal(true);
        topTriggered.current = true;

        setTimeout(() => {
          topTriggered.current = false;
        }, 8000);
      }

      // 🔻 BOTTOM REACHED
      if (
        scrollTop + windowHeight >= documentHeight - 50 &&
        !bottomTriggered.current
      ) {
        setShowModal(true);
        bottomTriggered.current = true;

        setTimeout(() => {
          bottomTriggered.current = false;
        }, 8000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("open-enquiry", openHandler);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* 🔥 ENQUIRY MODAL */}
      <EnquiryModal open={showModal} onClose={() => setShowModal(false)} />

      <main className="pt-[72px] sm:pt-[80px]">
        <Hero />
        <About />
        <AboutKunalGroup />
        <Amenities />
        <FloorPlans />
        <BrochureCTA />
        <Pricing />
        <Location />
        <ContactForm />
      </main>

      <ReraSection />
      <Footer />
    </div>
  );
};

export default Home;
