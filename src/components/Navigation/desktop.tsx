import Image from 'next/image'
import React from 'react'
import image from '@/assets/images/bg-sidebar-desktop.svg'
import Navigation from '.'

export default function DesktopNavigation() {
  return (
    <div className='flex-none relative hidden sm:block' >
        <Image src={image} alt="Back image" className='w-64 h-auto' />
        <div className="absolute top-0 left-0 w-full h-full p-6">
            <Navigation/>
        </div>
    </div>
  )
}
