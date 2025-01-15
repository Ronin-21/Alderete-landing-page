import AboutSection from "../../components/aboutSection/AboutSection";
import Banner from "../../components/banner/Banner";
import ContactSection from "../../components/contactSection/ContactSection";
import Hero from "../../components/hero/Hero";
import MidBanner from "../../components/midBanner/MidBanner";
import ServicesSection from "../../components/servicesSection/ServicesSection";
import TestimonialsSection from "../../components/testimonialsSection/TestimonialsSection";

const Home = () => {
  return (
    <div className="h-full">
      <Hero />
      <Banner />
      <ServicesSection />
      <AboutSection />
      <MidBanner />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
