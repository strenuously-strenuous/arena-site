// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";

export default function Placements() {
    return (
        <>
            <NavbarPage />
            <main className="max-w-6xl mx-auto px-6 py-10 bg-amber-800">
                <div className="bg-amber-800 py-12">
                    <h1 className="text-4xl font-semibold text-center">Placements</h1>
                </div>
            </main >
            <WhyUs />
            <Jumbotron />
            <AccordionDemo />
            <Footer />
        </>

    );
}