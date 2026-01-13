// /components/CourseCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition"
        >
            <div className="relative h-44">
                <Image
                    src={course.heroImage}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <div className="text-xs text-gray-500">
                    {course.category} • {course.duration}
                </div>
                <h3 className="font-semibold text-lg mt-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {course.shortDescription}
                </p>

                <div className="mt-4 inline-flex text-sm font-medium">
                    View details →
                </div>
            </div>
        </Link>
    );
}
