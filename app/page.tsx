import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import Stats from "@/components/ui/common/stats/page";
import Footer from "@/components/ui/common/footer/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import SwiperHome from '@/components/ui/swiper/home'
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import courses from "@/components/ui/common/courses/page";
import Courses from "@/components/ui/common/courses/page";

export default function Home() {
  return (
    <div className="">
      <NavbarPage />
      <HeroSection />
      <SwiperHome />
      <Stats />
      
      <Courses />
      
      <img className="w-full container rounded-4xl mx-auto" src="https://uwm.edu/cie/wp-content/uploads/sites/600/2022/06/Intl-admissions-banner.jpg" />
      <img
        src='https://content3.jdmagicbox.com/v2/comp/patna/p7/0612px612.x612.250523030506.f3p7/catalogue/arena-animation-ali-nagar-colony-patna-animation-services-f08xkhpzj6.jpg'
        alt='Arena Animation Banner'
        className='w-full object-cover container mx-auto rounded-4xl'
      />
      <WhyUs />
      <Jumbotron />
      <AccordionDemo />
      <Footer />
    </div>
  );
}
