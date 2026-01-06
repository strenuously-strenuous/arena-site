export default function Jumbotron() {
    return (
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-dark bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">The Best Animation Institute In Delhi</h1>
                <p className="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">The Best Animation Institute in Delhi offers industry-focused training in animation, VFX, gaming, and multimedia. With expert faculty, practical learning, and modern tools, we help students turn creativity into successful careers.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
                    <button type="button" className="inline-flex items-center justify-center text-white bg-primary hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
                        Getting started
                        <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </button>
                </div>
            </div>
        </section>

    )
}