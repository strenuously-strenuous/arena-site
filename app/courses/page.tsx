'use client';

import { useState } from 'react';
import Image from "next/image";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

import NavbarPage from "@/components/ui/common/navbar-component-01/page";
import AccordionDemo from "@/components/shadcn-studio/accordion/accordion-01";
import Jumbotron from "@/components/ui/common/jumbotron/page";
import WhyUs from "@/components/ui/common/whyus/page";
import Footer from "@/components/ui/common/footer/page";

const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'AVGC', label: 'Animation & VFX' },
    { id: 'GID', label: 'Game & Immersive Design' },
    { id: 'DCC', label: 'Digital Content Creation' },
    { id: 'AAIP', label: 'Advanced 3D & Architecture' },
];

export default function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredCourses = selectedCategory === 'all'
        ? courses
        : courses.filter(course => course.category === selectedCategory);

    return (
        <>
            <div className="relative min-h-78">
                <NavbarPage />
                <div className="mt-22 container mx-auto bg-pink-900 relative z-50 bottom-0">
                    <h1 className="left-0 end-0 text-center absolute z-50 text-white mx-auto text-7xl font-bold">Courses</h1>
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 z-1" style={{ maxHeight: '1000px', background: "linear-gradient(182deg, #fff40026, #000)" }}></div>
                <Image className="absolute top-0 left-0 right-0 bottom-0 object-cover" src='/images/game/jonathon-gregory-bick-camera17.jpg' fill alt="banner image" />
            </div>


            <main className="px-6 py-10 container mx-auto">
                <div className="mb-8">
                    <p className="text-gray-600 mt-2">
                        Choose from {filteredCourses.length}+ industry-relevant courses.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-8 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category.id
                                    ? 'bg-pink-600 text-white shadow-lg'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.slug} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No courses found in this category.</p>
                    </div>
                )}
            </main>
            <AccordionDemo />
            <Footer />
        </>
    );
}
