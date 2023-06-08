import Image from 'next/image'
import React from 'react'
import bg from "@/assets/images/bg-sidebar-mobile.svg"

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 w-screen z-0 sm:hidden">
        <Image src={bg} alt="Background Image" className='w-full h-auto' />
    </div>
  )
}
