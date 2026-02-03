// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 max-w-7xl mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Contact</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>
            <main className="bg-white">
                {/* Hero */}
                <section className="bg-[#F22E2E] text-white">
                    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Arena Animation <span className="text-[#F2E30C]">Patel Nagar</span>
                        </h1>
                        <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
                            Get in touch with Arena Animation Patel Nagar to start your creative
                            career in Animation, VFX, Gaming & Digital Design.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-[#F22E2E]">
                                Visit or Reach Us
                            </h2>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Arena Animation Patel Nagar is conveniently located in West Delhi
                                and welcomes students looking to build careers in creative and
                                digital industries.
                            </p>

                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong className="text-[#F22E2E]">Address:</strong><br />
                                    Patel Nagar, West Delhi, New Delhi – India
                                </p>

                                <p>
                                    <strong className="text-[#F22E2E]">Phone:</strong><br />
                                    +91 XXXXXXXXXX
                                </p>

                                <p>
                                    <strong className="text-[#F22E2E]">Email:</strong><br />
                                    info@arenapatelnagar.com
                                </p>

                                <p>
                                    <strong className="text-[#F22E2E]">Working Hours:</strong><br />
                                    Monday – Saturday: 10:00 AM – 7:00 PM
                                </p>
                            </div>

                            <img
                                src="https://placehold.co/600x350"
                                alt="Arena Animation Patel Nagar Location"
                                className="mt-8 rounded-xl shadow-md"
                            />
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-[#F22E2E]">
                                Enquire Now
                            </h3>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F22E2E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F22E2E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F22E2E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Interested Course
                                    </label>
                                    <select
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F22E2E]"
                                    >
                                        <option>Animation & VFX</option>
                                        <option>Game Design</option>
                                        <option>Graphic Design</option>
                                        <option>Web Design</option>
                                        <option>Video Editing</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Your Message"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F22E2E]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#F22E2E] text-white font-semibold py-3 rounded-lg hover:bg-[#d92727] transition"
                                >
                                    Submit Enquiry
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    We respect your privacy. Our team will contact you shortly.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Local SEO */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#F22E2E]">
                            Contact Arena Animation Patel Nagar, Delhi
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Looking for the best animation and VFX institute in West Delhi?
                            Contact Arena Animation Patel Nagar today to speak with our
                            counselors and explore career-focused creative courses.
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
