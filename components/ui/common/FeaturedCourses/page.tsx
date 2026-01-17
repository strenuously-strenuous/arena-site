'use client'

import Link from "next/link";
import CardProduct from "@/components/shadcn-studio/card/card-12";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function FeaturedCourses() {
    // const CoursesData = [
    //     {
    //         image: "https://arenakalkaji.com/wp-content/uploads/2024/04/arena-animation-kalkaji-64.jpg",
    //         title: "Degree Courses",
    //         subtitle: "Graduation/ Post Graduation with Jagannath University.",
    //     },
    //     {
    //         image: "https://arenakalkaji.com/wp-content/uploads/2024/04/arena-animation-kalkaji-63.jpg",
    //         title: "VFX & Animation Courses",
    //         subtitle: "Our Career-oriented VFx and Animation Courses",
    //     },
    //     {
    //         image: "https://arenakalkaji.com/wp-content/uploads/2024/04/arena-animation-kalkaji-62.jpg",
    //         title: "Web & Graphics Courses",
    //         subtitle: "Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc.",
    //     },
    //     {
    //         image: "https://arenakalkaji.com/wp-content/uploads/2024/04/arena-animation-kalkaji-62.jpg",
    //         title: "Web & Graphics Courses",
    //         subtitle: "Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc.",
    //     },
    //     {
    //         image: "https://arenakalkaji.com/wp-content/uploads/2024/04/arena-animation-kalkaji-62.jpg",
    //         title: "Web & Graphics Courses",
    //         subtitle: "Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc.",
    //     },
    //     {
    //         image: "https://arenakalkaji.com/wp-content/uploads/2024/04/arena-animation-kalkaji-62.jpg",
    //         title: "Web & Graphics Courses",
    //         subtitle: "Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc. Our Career-oriented Courses related to Web, Graphics, UI/ UX etc.",
    //     },

    // ];

    return (
        <div>
            <h3 className="text-center text-6xl font-bold mb-12 text-primary relative p-2">
                <span className="">
                    Courses
                </span>
                <svg
                    width='223'
                    height='12'
                    viewBox='0 0 223 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className=' absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
                >
                    <path
                        d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                        stroke='url(#paint0_linear_10365_68643)'
                        strokeWidth='2'
                        strokeLinecap='round'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_10365_68643'
                            x1='18.8541'
                            y1='3.72033'
                            x2='42.6487'
                            y2='66.6308'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stopColor='var(--primary)' />
                            <stop offset='1' stopColor='var(--primary-foreground)' />
                        </linearGradient>
                    </defs>
                </svg>
            </h3>
            <div className="container flex gap-3.5 mx-auto flex-wrap ">
                <section className="mt-6">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <p className="text-gray-600 mt-1">
                                Industry-relevant programs designed for careers.
                            </p>
                        </div>

                        <Link href="/courses" className="text-sm font-medium">
                            View all
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {courses.map((course) => (
                            course.featured == true ? <CourseCard key={course.slug} course={course} /> : ''

                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}