// /components/CourseCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
    return (
        <Link
            href={`/courses/${course.slug}`}
            className="rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition  max-h-64 "
        >
            <div className="relative h-44">
                <Image
                    src={course.heroImage}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col justify-between p-5">
                <div className="h-28" style={{height: '100px'}}>
                    <div className="text-xs text-gray-500">
                        {course.duration} Hrs.
                    </div>
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                </div>

                <div className="text-sm font-medium">
                    View details →
                </div>
            </div>
        </Link>
    );
}
