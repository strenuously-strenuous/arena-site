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
import FeaturedCourses from "@/components/ui/common/FeaturedCourses/page";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const featuredCourses = courses.filter((c) => c.featured).slice(0, 6);

  return (
    <div className="">

      <div className="relative" style={{ minHeight: '900px' }}>
        <NavbarPage />
        <video autoPlay muted loop className="h-full w-full object-cover absolute top-0 bottom-0" src="/videos/ju-jinhwan.mp4" style={{ maxHeight: '100%' }}></video>
        {/* <Image className="object-cover h-dvh h-screen" src={"/images/temp.jpg"} fill alt="Banner" /> */}
        <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
        <HeroSection />
      </div>
      <Stats />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mb-16 mt-10">

        <div className="px-5">
          <h1 className="text-4xl font-bold">Arena Animation Patel Nagar</h1>
          <p className="mt-6">With over 10+ years of experience in the creative and digital industry, Arena Patel Nagar brings hands-on expertise in Web Development, Graphic Design, Animation, and 3D Visualization. Having worked closely with industry professionals and aspiring creatives, they are committed to delivering job-oriented, practical training that bridges the gap between education and real-world demands.</p>
          <p className="mt-6">At our centre, the focus is not just on learning tools, but on building creative thinkers, problem solvers, and confident professionals ready for today’s competitive industry.</p>

          <div className="max-w-4xl mx-auto mt-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <span className="text-xl">🎯</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Industry-aligned curriculum</span> designed for real-world projects
                </p>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <span className="text-xl">🧑‍🏫</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Expert trainers</span> with professional field experience
                </p>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <span className="text-xl">💻</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Hands-on training</span> with latest tools & technologies
                </p>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <span className="text-xl">📂</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Portfolio-based learning</span> for career readiness
                </p>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <span className="text-xl">🤝</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Career guidance, internships</span> & placement support
                </p>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <span className="text-xl">🚀</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Emphasis on creativity</span>, innovation, and practical skills
                </p>
              </li>
            </ul>
          </div>

        </div>
        <div>
          {/* <img src="https://preview.free3d.com/img/2015/05/1688734213211162270/fnim33ca.jpg" alt="" /> */}
          <img src="https://preview.free3d.com/img/2014/06/2408166643059394256/avabf6js.jpg" alt="" />
        </div>

      </div>

      <SwiperHome />
      <FeaturedCourses />

      <WhyUs />
      <Jumbotron />
      <AccordionDemo />
      <Footer />
    </div>
  );
}
