
import Container from "../common/Container";
import ServiceCard from "../common/ServiceCard";


export default function ServicesSection() {
  return (
    <section className=" ">
      <Container size="lg">
        <h2 className="text-primary headingTwo font-bold max-w-[803px] mx-auto text-center mb-[60px]">
          {" "}
          Get the most valuable expert service now
        </h2>
        
        <div className="rounded-[6px] overflow-hidden">

            <ServiceCard/>
        </div>
   
      </Container>
    </section>
  );
}
