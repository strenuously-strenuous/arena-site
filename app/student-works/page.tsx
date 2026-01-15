// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";

export default function StudentWorks() {
    return (
        <>
            <NavbarPage />
            <main className="container mx-auto px-6 py-10">
                <div className="bg-amber-800 py-12">
                    <h1 className="text-4xl font-semibold text-center mb-15">Student Work</h1>
                    <div className="relative mt-15" style={{ minHeight: 600 }}>
                        <Image className="" src={"/images/banner.png"} fill alt="Banner" />
                    </div>

                </div>
            </main >
            <WhyUs />
            <Jumbotron />
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
