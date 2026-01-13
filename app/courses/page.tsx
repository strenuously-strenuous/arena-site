// /app/courses/page.tsx
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";

export const metadata = {
    title: "Courses | Your Institute Name",
    description: "Explore our career-focused courses and training programs.",
};

export default function CoursesPage() {
    return (
        <>
            <NavbarPage />

            <main className="px-6 py-10 max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Courses</h1>
                    <p className="text-gray-600 mt-2">
                        Choose from {courses.length}+ industry-relevant courses.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <CourseCard key={course.slug} course={course} />
                    ))}
                </div>
            </main>

            <WhyUs />
            <Jumbotron />
            <AccordionDemo />
            <Footer />
        </>
    );
}
