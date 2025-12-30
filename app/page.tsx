import Image from "next/image";
import { Button } from "@/components/ui/button"
import NavbarPage from "./navbar-component-01/page";
import HeroSectionPage from '@/app/hero-section-01/page'


export default function Home() {
  return (
    <div className="">
      <NavbarPage />
        <img className="w-full" src="https://arenaanimation.in/images/arena-animation-rahul-dravid-ad-banner.jpg" alt="" />
      <HeroSectionPage />
    </div>
  );
}
