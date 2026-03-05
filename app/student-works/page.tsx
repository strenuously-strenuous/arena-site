// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";
import VideoGallery from "@/components/VideoGallery";

export default function StudentWorks() {


    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 max-w-7xl mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Student Works</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/Game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>
            <main className="">
                {/* Hero */}
                <section className="grid gap-5 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-6 py-20 text-center">
                    <div className="border  p-5 rounded-4xl ">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Creative  <span className="text-[#F2E30C]">Showcase</span>
                        </h1>
                        <p className="mt-5  text-lg max-w-3xl mx-auto">
                            A showcase of creativity, skill, and passion — created by students
                            of Arena Animation Patel Nagar.
                        </p>
                    </div>
                    <div className="border  p-5 rounded-4xl">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Learning by <span className="text-[#F2E30C]">Creating</span>
                        </h1>
                        <p className="mt-5  text-lg max-w-3xl mx-auto">
                            At Arena Animation Patel Nagar, students don’t just learn tools —
                            they create industry-level projects. From animation films and VFX
                            shots to game assets and design portfolios, every project reflects
                            practical training and creative growth.
                        </p>
                    </div>
                </section>


                {/* Categories */}
                <section className="py-10 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
                        {[
                            "Animation",
                            "VFX",
                            "Game Design",
                            "Graphic Design",
                            "Web Design",
                            "Video Editing",
                            "Motion Graphics",
                        ].map((cat, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-[#F22E2E] text-[#F22E2E]"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Works Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                <div
                                    key={item}
                                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                                >
                                    <div className="relative">
                                        <img
                                            src="https://placehold.co/600x400"
                                            alt="Student project"
                                            className="w-full h-56 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-[#F22E2E]/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                            <span className="text-white font-semibold">
                                                View Project
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-[#F22E2E]">
                                            Student Project Title
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Category: Animation / VFX
                                        </p>
                                    </div>
                                </div>
                            ))} */}

                        </div>

                        <VideoGallery />
                    </div>
                </section>

                

                {/* Why Student Works Matter */}
                <section className="bg-[#F22E2E] text-white py-20">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Why Student Projects Matter
                        </h2>
                        <p className="text-white/90 leading-relaxed">
                            These works form the foundation of student portfolios and play a
                            crucial role in placements. Each project is designed to meet
                            industry expectations and helps students showcase their skills to
                            studios and employers.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-[#F22E2E]">
                            Create Work That Gets You Noticed
                        </h2>
                        <p className="text-gray-700 mb-8">
                            Join Arena Animation Patel Nagar and build a portfolio that opens
                            doors to creative careers.
                        </p>

                        <a
                            href="/contact"
                            className="inline-block bg-[#F22E2E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#d92727] transition"
                        >
                            Enquire Now
                        </a>
                    </div>
                </section>

                {/* Local SEO */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#F22E2E]">
                            Student Portfolios at Arena Animation Patel Nagar, Delhi
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Explore creative student projects from Arena Animation Patel Nagar,
                            a leading animation and VFX institute in West Delhi focused on
                            practical, portfolio-driven learning.
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
