import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// import RippleGrid from '@/components/RippleGrid';

const HeroSection = () => {
  return (
    <section className='flex flex-1 flex-col  justify-between overflow-x-hidden absolute left-0 right-0 z-50' style={{ top: 'calc(50% - 300px)', right: 0 }}>
      {/* Hero Content */}

      <div className='relative'>
        <div style={{ width: '100%', height: 600, position: 'relative' }}>
          {/* <RippleGrid
            enableRainbow={true}
            gridColor="#F2E30C"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.1}
          /> */}
        </div>

        <div className='absolute start-0 end-0 top-0 bottom-0 mx-auto flex max-w-7xl flex-col items-center px-4 text-center py-6 sm:px-6 lg:px-8'>
          <div className='mb-4 flex items-center gap-2.5 rounded-full border border-gray-300 px-1 py-1  text-xs mt-5'>
            <Badge className='text-xs bg-white text-dark'>GenAI-Powered Courses</Badge>
          </div>

          <h1 className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl text-white'>
            Unleash Your
            <br />
            <span className='relative text-6xl  lg:text-9xl'>
              Creative
              <svg
                width='223'
                height='12'
                viewBox='0 0 223 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
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
                    <stop stopColor='#fff' />
                    <stop offset='1' stopColor='#fff' />
                  </linearGradient>
                </defs>
              </svg>
            </span>{'  '}
            Power!
          </h1>

          <p className='my-10 lg:my-16 text-white'>
            Arena Animation empowers you with industry-focused training in <strong>Animation</strong>, <strong>VFX</strong>, <strong>Gaming</strong>, <strong>Digital Design</strong>, <strong>UI/UX</strong>, and <strong>Web Design & Development</strong>. With expert mentors, practical learning, and real-world projects, we help turn creative passion into a successful career.


          </p>

          <Button size='lg' asChild>
            <Link href='#'>Enquire Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
