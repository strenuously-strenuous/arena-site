// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";
import { PlacementBrands } from "@/data/placementBrands";

export default function Placements() {
    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 max-w-7xl mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Placements</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>
            <main className="bg-white">


                {/* Placement Philosophy */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-[#F22E2E]">
                                Our Placement Philosophy
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Placement at Arena Animation Patel Nagar is not about shortcuts.
                                It is about building <strong>real skills, strong portfolios,
                                    and professional confidence</strong> that studios look for.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                As an authorized Arena Animation franchise, we follow a structured
                                industry-readiness model that helps students transition smoothly
                                from classroom to workplace.
                            </p>
                        </div>

                        <img
                            src="/images/placement.png"
                            alt="Student portfolio review session"
                            className="rounded-xl "
                        />
                    </div>
                </section>

                {/* What We Offer */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-[#F22E2E]">
                            What Our Placement Support Includes
                        </h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Portfolio Development",
                                    desc: "Guidance on showreels, demo reels, and project presentation aligned with studio expectations.",
                                },
                                {
                                    title: "Interview Preparation",
                                    desc: "Mock interviews, resume building, and soft skills training for creative professionals.",
                                },
                                {
                                    title: "Industry Exposure",
                                    desc: "Interaction with studios, production pipelines, and real-world creative workflows.",
                                },
                                {
                                    title: "Job Alerts",
                                    desc: "Access to relevant job openings shared by Arena’s placement network.",
                                },
                                {
                                    title: "Career Counseling",
                                    desc: "One-on-one guidance to help students choose the right career path.",
                                },
                                {
                                    title: "Continuous Support",
                                    desc: "Placement assistance continues even after course completion.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#F2E30C]"
                                >
                                    <h3 className="text-xl font-semibold mb-2 text-[#F22E2E]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hero */}
                <section className="bg-[#F22E2E] text-white">
                    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Placements & <span className="text-[#F2E30C]">Career Support</span>
                        </h1>
                        <p className="mt-5 text-white/90 text-lg max-w-3xl mx-auto">
                            At Arena Animation Patel Nagar, we prepare students not just to learn —
                            but to get hired in the Animation, VFX, Gaming & Digital Media industries.
                        </p>
                    </div>
                </section>

                {/* Career Paths */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-10 text-center text-[#F22E2E]">
                            Career Opportunities After Arena Animation
                        </h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {[
                                "2D / 3D Animator",
                                "VFX Artist",
                                "Game Designer",
                                "Graphic Designer",
                                "Web Designer",
                                "Video Editor",
                                "Motion Graphics Artist",
                                "UI / UX Designer",
                                "Multimedia Artist",
                            ].map((role, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 py-4 rounded-lg font-medium text-gray-800"
                                >
                                    {role}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recruiters */}
                <section className="py-10" id="placement-brands">
                    <div className="mx-auto text-center">
                        <div className=" py-6 mb-8">
                            <h2 className="text-3xl font-bold mb-6">
                                Studios & Companies Our Students Work With
                            </h2>
                            <p className=" max-w-3xl mx-auto ">
                                Arena Animation students have been placed across leading animation
                                studios, VFX houses, gaming companies, advertising agencies,
                                and digital production studios in India and abroad.
                            </p>
                        </div>
                        <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-6 gap-6">
                            {PlacementBrands.map((item) => (
                                <img
                                    src={`/images/brands/${item.url}`}
                                    alt="Recruiter logo"
                                    className=""
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-[#F22E2E]">
                            Start Your Creative Career with Confidence
                        </h2>
                        <p className="text-gray-700 mb-8">
                            Join Arena Animation Patel Nagar and get trained with a clear focus
                            on skills, portfolios, and career readiness.
                        </p>

                        <a
                            href="/contact"
                            className="inline-block bg-[#F22E2E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#d92727] transition"
                        >
                            Enquire About Placements
                        </a>
                    </div>
                </section>

                {/* Local SEO */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#F22E2E]">
                            Placement Support at Arena Animation Patel Nagar, Delhi
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Arena Animation Patel Nagar offers structured placement assistance
                            for students in West Delhi, helping them access career opportunities
                            in animation, VFX, gaming, and digital media industries.
                        </p>
                    </div>
                </section>
            </main>
            <AccordionDemo />
            <Footer />
        </>

    );
}