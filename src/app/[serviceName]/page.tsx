'use client'

import Stepper, { Step } from '@/components/Stepper';
import { lobster } from '@/fonts/Lobster';
import Service from '@/models/Service';
import ServiceDetails from '@/models/ServiceDetails';
import { services } from '@/staticContent/Services';
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';

export default function StartBusiness({ params }: { params: Promise<{ serviceName: string }> }) {
  const [service, setService] = useState<Service>();
  const [steps, setSteps] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function getStepContent(serviceDetail: ServiceDetails): React.ReactNode {
    return (
      <div className="flex flex-col w-full px-4 font-medium">
        <h1 className={`text-2xl ${lobster.className} text-primary my-2`}>{serviceDetail.name}</h1>

        <div className='text-justify my-2'>
          {
            serviceDetail.description
          }
        </div>

        <ul className=''>
          {
            serviceDetail.features.map((feature) => {
              return (
                <li key={feature} className='my-1'>
                  <div className="flex items-center">
                    <div className='text-xl text-primary'>
                      <FaCheckCircle />
                    </div>
                    <div className='mx-2'>
                      {feature}
                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>

        <button className='my-2 mt-4 2xs:w-full sm:w-max  text-lg text-white bg-primary hover:bg-tint p-4 py-2 hover:text-xl transition-all duration-300 rounded-xl font-medium'>
          Start Now ₹{serviceDetail.price}/-
        </button>
      </div>
    )
  }

  async function getService() {
    const route = (await params).serviceName;
    const service = services.find((service) => service.id.toLowerCase() == route.toLowerCase());
    setService(service);
    const steps: Step[] = service?.types.map((type) => {
      return (
        new Step(type.name, getStepContent(type))
      )
    }) ?? [];

    console.log(service);
    console.log(steps);

    setSteps(steps);
  }

  useEffect(() => {
    getService();
  }, [])

  useEffect(() => {
    if (steps && steps.length > 0) {
      setIsLoading(false);
    }
  }, [steps])

  return (
    <div className='w-full flex justify-center'>
      {
        !isLoading &&
        <div className="w-max">
          <div className="flex flex-col w-full p-4 my-4 font-medium rounded-xl shadow-[0_0px_7px_rgba(0,0,0,0.4)]">
            <h1 className={`text-2xl ${lobster.className} text-primary my-2`}>
              {service?.name}
            </h1>
            <h2 className={`text-lg m-2`}>
              {service?.heading}
              <div className='p-4 py-2 text-base'>
                - {service?.subHeading}
              </div>
            </h2>
          </div>
          <Stepper currentStep={0} layout='vertical' steps={steps} />
        </div>
      }
    </div>
  )
}
