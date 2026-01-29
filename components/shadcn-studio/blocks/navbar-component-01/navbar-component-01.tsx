'use client'

import { MenuIcon, PhoneCallIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Logo from '@/components/shadcn-studio/logo'

type NavigationItem = {
  title: string
  href: string
}[]


const Navbar = ({ navigationData, href }: { navigationData: NavigationItem, href: string }) => {
  const pathname = usePathname();

  return (
    <header className='bg-background sticky top-0 z-100 text-white'>
      <div className='mx-auto flex container items-center justify-between gap-8 px-4 py-2 sm:px-6'>
        <div className='flex flex-1 items-center gap-8 font-medium justify-between lg:gap-16'>
          <Link href='/'>
            <Image src="/images/logo.png" width={100} height={100} alt='logo' />
          </Link>
          <div className='md:flex hidden gap-6'>
            {navigationData.map((item, index) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={clsx(
                    'transition',
                    isActive && 'text-secondary font-bold'
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
          <div className='text-end'>
            <a href="tel:9625277697" className='transition md:flex hidden gap-3 border-primary px-4 py-1 hover:opacity-50 text-white'>

              <div className='flex flex-col gap-0 '>
                <span className='p-1 justify-end rounded-[2px] justify-center text-[12px] uppercase flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 48 48"> <path fillRule="evenodd" clipRule="evenodd" d="M27 4H28.5C37.0604 4 44 10.9396 44 19.5V21H41V19.5C41 12.5964 35.4036 7 28.5 7H27V4Z" fill="rgb(255,0,0)" data-color="color-2"></path> <path fillRule="evenodd" clipRule="evenodd" d="M27 11H28.5C33.1944 11 37 14.8056 37 19.5V21H34V19.5C34 16.4624 31.5376 14 28.5 14H27V11Z" fill="rgb(255,0,0)" data-color="color-2"></path> <path fillRule="evenodd" clipRule="evenodd" d="M15.1398 2.81921L21.401 16.9167L15.6703 21.5012C18.4042 25.8921 22.1103 29.598 26.5026 32.3331L31.0841 26.6041L45.1812 32.8639L42.6274 42.6873C42.1264 44.6146 40.2548 45.9254 38.2346 45.5836C18.7551 42.2887 5.68935 29.2466 2.39027 9.76723C2.04793 7.74591 3.36019 5.87351 5.28882 5.37344L15.1398 2.81921Z" fill="rgb(255,0,0)"></path> </svg>

                  Free Counselling
                </span>
                {/* <span className='mb-2 bg-primary text-white p-1 rounded-[2px] justify-center text-muted-foreground text-[12px] uppercase flex items-center gap-2 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  Free Counselling
                </span> */}
                <span className='mt-[-6px] p-0 text-2xl font-bold'>
                  962-5277-697
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
