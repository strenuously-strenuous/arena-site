// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";
import Link from "next/link"
import { Blog as BlogType, getAllBlogs } from "@/lib/blog"


export default function Blog() {
    const blogs: BlogType[] = getAllBlogs()

    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 max-w-7xl mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Blog</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/Game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>
            <div className="prose">
                <h1>Hello World</h1>
                <p>This is a paragraph.</p>
                <ul>
                    <li>Item one</li>
                    <li>Item two</li>
                </ul>
            </div>


            <div className="container mx-auto px-4 py-12">
                {/* Section Header */}
                <div className="mb-10 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F22E2E]">
                        Insights & Articles
                    </h1>
                    <p className="mt-3 text-gray-600">
                        Explore articles on creativity, design, animation, technology, and career
                        growth—written to inspire students and professionals in the creative industry.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition"
                        >
                            {/* Thumbnail */}
                            <div className="h-48 bg-gray-100 overflow-hidden">
                                <img
                                    src={blog.image || "https://placehold.co/600x400"}
                                    alt={blog.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#F22E2E] transition">
                                    {blog.title}
                                </h2>

                                <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                                    {blog.description}
                                </p>

                                {/* Meta */}
                                <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                                    <span>{blog.date}</span>
                                    <span className="font-medium text-[#F22E2E]">
                                        Read Article →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
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
