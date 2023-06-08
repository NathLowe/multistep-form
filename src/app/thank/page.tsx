import React from 'react'
import image from "@/assets/images/icon-thank-you.svg"
import Image from 'next/image'

export default function ThankPage() {
  return (
    <div className='w-full h-full flex items-center py-8' >
        <div>
            <div className='mx-auto w-fit' >
                <Image src={image} alt="Check" className='w-20 h-20' />
            </div>
        <h1 className='mt-6 mb-3 text-primary text-3xl text-center' >Thank you!</h1>
        <p className='text-muted-dark text-center' >Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
  )
}
