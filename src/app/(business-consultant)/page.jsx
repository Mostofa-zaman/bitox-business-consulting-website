import ThemeInitializer from "@/components/helper/ThemeInitializer";
import FeaturesRound from "@/components/homeOne/FeaturesRound";
import HeroSection from "@/components/homeOne/HeroSection";
import AboutSectionHO from "@/components/homeOne/AboutSectionHO";
import BrandLogos from "@/components/homeOne/BrandLogos";
import ServicesSection from "@/components/homeOne/ServicesSection";
import VideoShowcase from "@/components/homeOne/VideoShowcase";
import TestimonialsSection from "@/components/homeOne/TestimonialsSection";
import PortfolioSection from "@/components/homeOne/PortfolioSection";
import ProcessSteps from "@/components/homeOne/ProcessSteps";
import BlogSectionHO from "@/components/homeOne/BlogSectionHO";
import ContactSectionHO from "@/components/homeOne/ContactSectionHO";
import HomeFaqSection from "@/components/homeOne/HomeFaqSection";


const Home1 = () => {
  return (
   <>
    <ThemeInitializer pathName={"business-consultant"} />
    <HeroSection/>
    <FeaturesRound/>
    <AboutSectionHO/>
    <BrandLogos/>
    <ServicesSection/>
    <VideoShowcase/>
    <TestimonialsSection/>
    <PortfolioSection/>
    <ProcessSteps/>
    <BlogSectionHO/>
    <ContactSectionHO/>
    <HomeFaqSection/>
   
   </>
  );
};

export default Home1;