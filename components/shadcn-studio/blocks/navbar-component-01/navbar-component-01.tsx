'use client'

import { MenuIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type NavigationItem = {
  title: string
  href: string
}[]

export default function Navbar({ navigationData }: { navigationData: NavigationItem }) {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-black.png" alt="logo" width={110} height={40} />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">

        <Button className='rounded-lg max-md:hidden' asChild>
          <a href='#'>Call 96252-77697</a>
        </Button>

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-screen max-w-xs">
              <DropdownMenuGroup>
                {navigationData.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
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
