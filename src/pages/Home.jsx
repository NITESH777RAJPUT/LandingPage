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
import BrochureCTA from "../components/BrochureCTA";
import AboutKunalGroup from "../components/AboutKunalGroup";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    /* 🔥 OPEN MODAL FROM ANYWHERE */
    const openHandler = () => setShowModal(true);
    document.addEventListener("open-enquiry", openHandler);

    /* 🔔 POPUP ON PAGE LOAD */
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("enquiryShown")) {
        setShowModal(true);
        sessionStorage.setItem("enquiryShown", "true");
      }
    }, 3000);

    /* 🔔 POPUP AFTER FULL SCROLL */
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
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
        <Amenities />
        <FloorPlans />

        {/* ✅ ABOUT KUNAL GROUP — ABOVE BROCHURE */}
        <AboutKunalGroup />

        {/* ✅ BROCHURE CTA */}
        <BrochureCTA />

        <Pricing />

        {/* ✅ LOCATION ONLY (NO CONNECTIVITY) */}
        <Location />

        <ContactForm />
      </main>

      <ReraSection />
      <Footer />
    </div>
  );
};

export default Home;
