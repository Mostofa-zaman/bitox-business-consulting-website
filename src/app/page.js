import ButtonThree from "@/components/common/ButtonThree";
import Responsive from "@/components/common/Responsive";
import FooterOne from "@/components/layout/FooterOne";
import NavbarOne from "@/components/layout/NavbarOne";
import NavbarTwo from "@/components/layout/NavbarTwo";



export default function Home() {
  return (
   

<Responsive.Flex>

<NavbarOne/>
<NavbarTwo/>
<FooterOne/>

</Responsive.Flex>
   
  );
}