import ThemeInitializer from "@/components/helper/ThemeInitializer";
import FeaturesRound from "@/components/homeOne/FeaturesRound";
import HeroSection from "@/components/homeOne/HeroSection";
import AboutSectionHO from "@/components/homeOne/AboutSectionHO";
import BrandLogos from "@/components/homeOne/BrandLogos";
import ServicesSection from "@/components/homeOne/ServicesSection";


const Home1 = () => {
  return (
   <>
    <ThemeInitializer pathName={"business-consultant"} />
    <HeroSection/>
    <FeaturesRound/>
    <AboutSectionHO/>
    <BrandLogos/>
    <ServicesSection/>
   
   </>
  );
};

export default Home1;