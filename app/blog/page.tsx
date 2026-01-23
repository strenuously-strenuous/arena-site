// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";

import SuccessFearsBlog from "./posts/success-doesnt-come-easy/page";

export default function Blog() {
    return (
        <>
            <NavbarPage />
            <main className="max-w-6xl mx-auto px-6 py-10">
                {/* <div className="bg py-12">
                    <h1 className="text-4xl font-semibold text-center">Blog</h1>
                </div> */}

                <SuccessFearsBlog />
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
