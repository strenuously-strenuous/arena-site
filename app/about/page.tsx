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
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">About</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>

            <main className="bg-white">

                {/* Who We Are */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <img
                            src="https://placehold.co/500x500"
                            alt="Creative students at Arena Animation"
                            className="rounded-xl shadow-md"
                        />
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-[#F22E2E]">
                                Who We Are
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Arena Animation Patel Nagar</strong> is a premier vocational
                                training institute in Delhi and an authorized franchise of Arena
                                Animation — a globally trusted brand established in{" "}
                                <strong>1996</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We deliver career-focused education in{" "}
                                <strong>
                                    Animation, VFX, Gaming, Web Design, Graphic Design, and Multimedia
                                </strong>
                                , helping students become industry-ready professionals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Legacy & Global Reach */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-[#F22E2E]">
                            A Legacy of Creative Excellence
                        </h2>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            With over <strong>30 years of excellence</strong>, Arena Animation has
                            trained more than{" "}
                            <strong className="text-[#F22E2E]">450,000 students</strong> across{" "}
                            <strong>20+ countries</strong>. Our curriculum evolves with global
                            industry trends, including the integration of{" "}
                            <strong>Gen AI tools</strong>.
                        </p>

                        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { title: "30+ Years", desc: "Industry Experience" },
                                { title: "4.5L+ Students", desc: "Trained Worldwide" },
                                { title: "20+ Countries", desc: "Global Presence" },
                                { title: "Job-Ready", desc: "Career-Focused Training" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#F2E30C]"
                                >
                                    <h3 className="text-2xl font-bold text-[#F22E2E]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses & Industry Focus */}
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-[#F22E2E]">
                                Industry-Relevant Education
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our programs are aligned with the rapidly growing{" "}
                                <strong>AVGC industry</strong>, focusing on practical production
                                skills demanded by studios and agencies.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Animation & VFX Prime Programs</li>
                                <li>2D & 3D Animation</li>
                                <li>Game Design & Unreal Engine</li>
                                <li>Web & Graphic Design</li>
                                <li>Video Editing & Motion Graphics</li>
                            </ul>
                        </div>
                        <img
                            src="https://placehold.co/600x400"
                            alt="Animation and VFX Training"
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </section>

                {/* Career Support */}
                <section className="bg-[#F22E2E] text-white py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Career Support & Placements
                        </h2>
                        <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
                            We go beyond teaching software. Our placement assistance focuses on{" "}
                            <strong className="text-[#F2E30C]">
                                portfolio development, interview preparation, and studio exposure
                            </strong>
                            , helping students launch successful creative careers.
                        </p>
                    </div>
                </section>

                {/* Local SEO */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#F22E2E]">
                            Arena Animation Institute in Patel Nagar, Delhi
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Located in <strong>Patel Nagar, West Delhi</strong>, Arena Animation
                            serves students aspiring to build careers in animation, VFX, gaming,
                            and digital design with world-class training and mentorship.
                        </p>
                    </div>
                </section>
            </main>


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
