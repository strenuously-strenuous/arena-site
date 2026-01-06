export default function WhyUs() {
    // style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/545/866/HD-wallpaper-red-square-pattern-abstract.jpg)' }}
    return (
        <section className="" >
            <div className="grid container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight capitalize leading-none md:text-5xl xl:text-6xl dark:text-white">Why Arena Animation?</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl mt-8 dark:text-gray-400">Choosing Arena Animation means choosing a future where creativity paves the way for a job-ready and successful career in the AVGC-XR industry.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:opacity-75 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-on-bean-bag-3d-icon-png-download-4779535.png" alt="mockup" />
                </div>
            </div>
        </section >
    )
}