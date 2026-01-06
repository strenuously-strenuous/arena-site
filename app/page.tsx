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

export default function Home() {

  let navigationData = {

  }

  return (
    <div className="">
      <NavbarPage />
      <SwiperHome />
      <Stats />
      <HeroSection />
      <WhyUs />
      <Jumbotron />
      <AccordionDemo />
      <Footer />
    </div>
  );
}
