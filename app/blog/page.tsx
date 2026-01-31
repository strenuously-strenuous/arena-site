// /components/CourseTemplate.tsx
import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";
import Image from "next/image";
import Link from "next/link"
import { getAllBlogs } from "@/lib/blog"

export default function Blog() {
    const blogs = getAllBlogs()

    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 max-w-7xl mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Blog</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>


            <div className="container mx-auto py-5">
                <div className=" grid gap-6 md:grid-cols-2">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            className="border rounded-lg p-5 hover:shadow-md transition"
                        >
                            <h2 className="text-xl font-semibold">
                                {blog.title}
                            </h2>
                            <p className="text-sm text-muted-foreground mt-2">
                                {blog.description}
                            </p>
                            <p className="text-xs mt-4">
                                {blog.date}
                            </p>
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
