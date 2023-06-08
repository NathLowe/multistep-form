'use client'

import React from 'react'
import NextStepNavigation from '../Navigation/next-step'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const path = usePathname()
    if (path === '/thank') return null
  return (
    <footer className='fixed bottom-0 left-0 w-screen bg-white p-4 z-20 sm:hidden' >
        <NextStepNavigation/>
    </footer>
  )
}
