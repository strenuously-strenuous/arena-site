// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 max-w-7xl mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="absolute start-  z-50 text-white max-w-7xl mx-auto text-7xl font-bold">About</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>
            <AccordionDemo />
            <Footer />
        </>

    );
}

function Badge({ label }: { label: string }) {
    return (
        <span className="text-sm px-3 py-1 rounded-full border bg-white">
            {label}
        </span>
    );
}
