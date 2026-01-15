import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import Stats from "@/components/ui/common/stats/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import SwiperHome from '@/components/ui/swiper/home'
// import courses from "@/components/ui/common/courses/page";
import FeaturedCourses from "@/components/ui/common/FeaturedCourses/page";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);

  return (
    <div className="">
      <NavbarPage />

      <div className="relative mt-15" style={{ minHeight: 600 }}>
        <Image className="" src={"/images/banner.png"} fill alt="Banner" />
      </div>


      <HeroSection />
      <SwiperHome />
      <Stats />
      <FeaturedCourses />

      <WhyUs />
      <Jumbotron />
      <AccordionDemo />
      <Footer />
    </div>
  );
}
