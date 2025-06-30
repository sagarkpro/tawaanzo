import { lobster } from '@/fonts/Lobster'
import React from 'react'
import Loader from './Loader'

export default function ComingSoon() {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center text-primary font-semibold text-2xl ${lobster.className}`}>
      <Loader/>
      <p className='mt-8'>Hang tight! We are Working On Bringing this Service Live!</p>
    </div>
  )
}
