import ThemeInitializer from "@/components/helper/ThemeInitializer";
import FeaturesRound from "@/components/homeOne/FeaturesRound";
import HeroSection from "@/components/homeOne/HeroSection";
import AboutSectionHO from "@/components/homeOne/AboutSectionHO";
import BrandLogos from "@/components/homeOne/BrandLogos";



const Home1 = () => {
  return (
   <>
    <ThemeInitializer pathName={"business-consultant"} />
    <HeroSection/>
    <FeaturesRound/>
    <AboutSectionHO/>
    <BrandLogos/>
   
   </>
  );
};

export default Home1;