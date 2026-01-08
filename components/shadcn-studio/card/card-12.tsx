'use client'

import { useState } from 'react'

import { HeartIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'

const CardProductDemo = ({title, subtitle, image}) => {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <div className='relative max-w-md rounded-2xl overflow-hidden bg-gradient-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg'>
      <div className='flex h-60 items-center justify-center overflow-hidden'>
        <img
          src={image}
          alt='Shoes'
          className='w-75'
        />
      </div>
      <Card className='border-none gap-2'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription className='flex items-center gap-2'>
            <Badge variant='outline' className='rounded-sm'>
              EU38
            </Badge>
            <Badge variant='outline' className='rounded-sm'>
              Black and White
            </Badge>
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>
            {subtitle}
          </p>
        </CardContent>
        <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium uppercase'>Admission</span>
            <span className='text-xl font-semibold'>OPEN</span>
          </div>
          <Button size='lg' className='text-white'>Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardProductDemo
