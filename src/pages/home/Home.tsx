import AboutSection from "../../components/about/AboutSection";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="h-full">
      <Hero />
      <Banner />
      <AboutSection />
    </div>
  );
};

export default Home;
