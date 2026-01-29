
'use client'

import CountUp from '@/components/CountUp'
import GradientText from '@/components/GradientText'

// For a smoother animation, the gradient should start and end with the same color



export default function Stats() {
    return (
        <div className="translate-y-2/4 relative z-20" style={{ translate: ' 0 -50%' }}>
            <div className="mx-auto max-w-6xl  ">
                <dl className="px-5 grid grid-cols-2 gap-5 text-center lg:grid-cols-4">
                    <div className="w-full mx-auto flex max-w-xs flex-col gap-y-4 bg-white px-3 lg:px-3  py-8 border-2 shadow-lg outline-2 outline-red-700 border-2 border-yellow-500">
                        <GradientText
                            colors={["#e31510", "#f2e416"]}
                            className="custom-class"
                        >
                            <CountUp
                                startCounting
                                className="count-up-text order-first text-3xl font-semibold tracking-tight sm:text-5xl"
                                to="30"
                            />
                        </GradientText>
                        <dt className="text-base/7 text-black">Years of Experience</dt>
                    </div>
                    <div className="w-full mx-auto flex max-w-xs flex-col gap-y-4 bg-white px-3 lg:px-3  py-8 border-2 shadow-lg outline-2 outline-red-700 border-2 border-yellow-500">
                        <GradientText
                            colors={["#e31510", "#f2e416"]}
                            className="custom-class"
                        >
                            <CountUp
                                startCounting
                                className="count-up-text order-first text-3xl font-semibold tracking-tight sm:text-5xl"
                                to="50000"
                                separator=','
                            />
                        </GradientText>
                        <dt className="text-base/7 text-black">Students Trained</dt>
                    </div>
                    <div className="w-full mx-auto flex max-w-xs flex-col gap-y-4 bg-white px-3 lg:px-3  py-8 border-2 shadow-lg outline-2 outline-red-700 border-2 border-yellow-500">
                        <GradientText
                            colors={["#e31510", "#f2e416"]}
                            className="custom-class"
                        >
                            <CountUp
                                startCounting
                                className="count-up-text order-first text-3xl font-semibold tracking-tight sm:text-5xl"
                                to="200"
                            />
                            <span className='text-3xl'>+</span>
                        </GradientText>
                        <dt className="text-base/7 text-black">Brand Tie-Ups</dt>
                    </div>
                    <div className="w-full mx-auto flex max-w-xs flex-col gap-y-4 bg-white px-3 lg:px-3  py-8 border-2 shadow-lg outline-2 outline-red-700 border-2 border-yellow-500">
                        <GradientText
                            colors={["#e31510", "#f2e416"]}
                            className="custom-class"
                        >
                            <CountUp
                                startCounting
                                className="count-up-text order-first text-3xl font-semibold tracking-tight sm:text-5xl"
                                to="100"
                            />
                            <span className='text-3xl'>+</span>
                        </GradientText>
                        <dt className="text-base/7 text-black">Alumini's</dt>
                    </div>
                </dl>
            </div>
        </div>

    )
}