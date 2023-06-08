"use client"

import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation'

interface NavigationType {
    id: number;
    title: string;
    link: string;
}

const data: NavigationType[] = [
    {
        id: 1,
        title: 'Your Info',
        link: '/'
    },
    {
        id: 2,
        title: 'Select Plan',
        link: '/plan'
    },
    {
        id: 3,
        title: 'Add-Ons',
        link: '/add-ons'
    },
    {
        id: 4,
        title: 'Summary',
        link: '/summary'
    },
]

export default function Navigation() {
    let path = usePathname()
  return (
    <aside className='flex justify-center items-center gap-4 sm:flex-col sm:items-start' >
        {
            data.map(({id,title,link}) => (
                <div key={id} className={`flex items-center gap-3 text-alabaster uppercase group ${(path === link) && 'active'}`} >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full border border-muted cursor-default
                        group-[.active]:bg-link group-[.active]:text-primary">{id}</span>
                    <div className='hidden sm:block' >
                        <span className="text-muted block">Step {id}</span>
                        <span className="block tracking-wider font-semibold">{title}</span>
                    </div>
                </div>
            ))
        }
    </aside>
  )
}
