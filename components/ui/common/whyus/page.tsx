import { Button } from "../../button"
import { ArrowRightIcon } from "../../ArrowRightIcon"
import { Check } from "lucide-react"

export default function WhyUs() {
    return (
        <section className="container" >
            <div className="grid container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight capitalize leading-none md:text-5xl xl:text-6xl dark:text-white">Why Arena Animation?</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl mt-8 dark:text-gray-400">Choosing Arena Animation means choosing a future where creativity paves the way for a job-ready and successful career in the AVGC-XR industry.</p>
                    <Button size="default" aria-label="Next">
                        Get Started
                        <ArrowRightIcon />
                    </Button>
                </div>
                <div className="align-center justify-center lg:col-span-5 lg:flex flex-col gap-3">
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Industry-Relevant Curriculum</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Expert &amp; Certified Faculty</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Practical, Hands-On Training</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Career-Focused Learning</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Personalized Student Attention</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Latest Tools &amp; Technologies</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Strong Portfolio Development</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Placement &amp; Career Guidance</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Flexible Batch Timings</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Affordable Fee Structure</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Proven Student Success</h2>
                    <h2 className="border border-grey font-bold shadow-sm px-4 py-3 flex gap-4 text-primary"><Check /> Supportive Learning Environment</h2>

                </div>
            </div>
        </section >
    )
}