
'use client'

import CountUp from '@/components/CountUp'
import GradientText from '@/components/GradientText'

// For a smoother animation, the gradient should start and end with the same color



export default function Stats() {
    return (
        <div className="translate-y-2/4 relative z-20" style={{ translate: ' 0 -50%' }}>
            <div className="mx-auto max-w-7xl  ">
                <dl className="grid grid-cols-2 gap-5 text-center lg:grid-cols-4">
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
                                to="500000"
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
                        </GradientText>
                        <dt className="text-base/7 text-black">Centres</dt>
                    </div>
                    <div className="w-full mx-auto flex max-w-xs flex-col gap-y-4 bg-white px-3 lg:px-3  py-8 border-2 shadow-lg outline-2 outline-red-700 border-2 border-yellow-500">
                        <GradientText
                            colors={["#e31510", "#f2e416"]}
                            className="custom-class"
                        >
                            <CountUp
                                startCounting
                                className="count-up-text order-first text-3xl font-semibold tracking-tight sm:text-5xl"
                                to="20"
                            />
                        </GradientText>
                        <dt className="text-base/7 text-black">Countries</dt>
                    </div>
                </dl>
            </div>
        </div>

    )
}