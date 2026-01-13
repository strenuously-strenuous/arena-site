import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseTemplate from "@/components/CourseTemplate";

export function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

// ✅ Make it async for Next.js 15+ compatibility
export default async function CourseDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>; // ✅ params is a Promise
}) {
    const { slug } = await params; // ✅ unwrap it

    const course = courses.find((c) => c.slug === slug);
    if (!course) return notFound();

    return <CourseTemplate course={course} />;
}
