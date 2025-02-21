import ServiceSummaryInterface from '@/models/ServiceSummary.interface'
import React from 'react'
import { basePath } from './BasePath'

export default function ServiceSummary(props: { service: ServiceSummaryInterface }) {
  const isGhDeployment: boolean = process.env.NODE_ENV === "production";
  return (
    <div className='rounded-xl p-4 w-full shadow-[0_0px_7px_rgba(0,0,0,0.4)] h-full flex flex-col'>
      <a className='text-xl font-medium px-2 text-primary hover:text-tint hover:underline' href={`${isGhDeployment ? basePath : ''}/${props.service.href}`}>{props.service.title}</a>
      <p className='text-justify px-2 mt-4'>{props.service.description}</p>
      <ul className='list-disc p-6'>
        {
          props.service.types.map((type) => {
            return (
              <li key={type}>{type}</li>
            )
          })
        }
      </ul>
      <div className='flex flex-col items-center w-full grow'>
        <a href={`${isGhDeployment ? basePath : ''}/${props.service.href}`} className='mt-auto 2xs:w-full sm:w-max'>
          <button className='w-full text-lg text-white bg-primary hover:bg-tint p-4 py-2 hover:text-xl transition-all duration-300 rounded-xl font-medium'>Starting From ₹{props.service.price}/-</button>
        </a>
      </div>
    </div>
  )
}
