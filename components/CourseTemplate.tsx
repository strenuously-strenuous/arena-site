// /components/CourseTemplate.tsx
import { Button } from "./ui/button";
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";

import Image from "next/image";
import type { Course } from "@/data/courses";

export default function CourseTemplate({ course }: { course: Course }) {
    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 container mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Courses</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>
            <main className="max-w-6xl mx-auto px-6 py-10">

                {/* Hero */}
                <section className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl font-bold mt-2">{course.title}</h1>
                        <p className="text-gray-600 mt-4">{course.description}</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Badge label={`Duration: ${course.duration} Hours.`} />
                        </div>

                        <div className="mt-7 flex gap-3">

                            <Button size='lg' asChild className='text-white'>
                                <a
                                    href="https://wa.me/919625277697"
                                    target="_blank"
                                    className="px-5 py-3 rounded-xl bg-black text-white font-medium"
                                    rel="noreferrer"
                                >
                                    Enquire on WhatsApp
                                </a>
                            </Button>
                            <Button size='lg' variant={'outline'} asChild>
                                <a href="/contact"
                                    className=""
                                >
                                    Request Callback
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full h-[320px] rounded-2xl overflow-hidden border">
                        <Image
                            src={course.heroImage}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold">Software & Tools Covered</h2>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                        {course.softwareAndToolsCovered.map((h) => (
                            <li key={h} className="rounded-xl border p-4">
                                ✅ {h}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* jobProfiles */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold">Job Profiles</h2>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                        {course.jobProfiles.map((h) => (
                            <li key={h} className="rounded-xl border p-4">
                                ✅ {h}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Course Content */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold">Course Content</h2>
                    <div className="mt-4 space-y-4">
                        {course.syllabus.map((block) => (
                            <div key={block.title} className="rounded-2xl border p-5">
                                <h3 className="font-semibold text-lg">{block.title}</h3>
                                <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-gray-700">
                                    {block.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
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
