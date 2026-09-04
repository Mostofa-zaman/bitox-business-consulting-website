import Container from "../common/Container";
import FaqHeading from "./FaqHeading";


const FaqSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[120px]">
      <Container size="lg">
      <FaqHeading/>
      </Container>
    </section>
  );
};

export default FaqSection;
