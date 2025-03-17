import ServiceDetails from '@/models/ServiceDetails'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function ServiceDetailComponent(props: { service: ServiceDetails }) {
  return (
    <div className='rounded-xl p-4 w-full shadow-[0_0px_7px_rgba(0,0,0,0.4)] h-full flex flex-col'>
      <h1 className='text-xl font-medium px-2 text-primary'>{props.service.name}</h1>
      
      {
        props.service.descriptions.map((description, index) => {
          return(
            <p className='text-justify px-2 mt-4' key={`desc-${index}`}>{description}</p>
          )
        })
      }

      <ul className='p-6'>
        {
          props.service.features.map((feature) => {
            return (
              <li key={feature} className='py-2'>
                <div className='flex items-start'>
                  <div className='text-primary text-lg mt-1'>
                    <FaCheckCircle/>
                  </div>
                  <div className='px-2'>
                    {feature}
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='flex flex-col items-center w-full grow'>
        <button className='mt-auto 2xs:w-full sm:w-max text-lg text-white bg-primary hover:bg-tint p-4 py-2 hover:text-xl transition-all duration-300 rounded-xl font-medium'>Starting From ₹{props.service.price}/-</button>
      </div>
    </div>
  )
}
