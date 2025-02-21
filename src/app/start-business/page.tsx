'use client'

import ServiceDetailComponent from '@/components/ServiceDetail';
import { lobster } from '@/fonts/Lobster';
import Service from '@/models/Service';
import { services } from '@/staticContent/Services';
import React, { useEffect, useState } from 'react'

export default function StartBusiness() {
  const [service, setService] = useState<Service>();
  const [isLoading, setIsLoading] = useState<boolean>(true);


  async function getService() {
    // const route = (await params).serviceName;
    const service = services.find((service) => service.id.toLowerCase() == "start-business");
    setService(service);
    console.log(service);
  }

  useEffect(() => {
    getService();
  }, [])

  useEffect(() => {
    if (service) {
      setIsLoading(false);
    }
  }, [service])

  return (
    <div className='w-full flex justify-center p-4'>
      <div className='max-w-[1000px] flex 2xs:flex-col sm:flex-row justify-center flex-wrap'>
        <div className="w-full p-4">
          <div className="flex flex-col w-full p-4 my-4 mb-0 font-medium rounded-xl shadow-[0_0px_7px_rgba(0,0,0,0.4)]">
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
        </div>
          {
            !isLoading &&
            service?.types.map((serviceDetail) => {
              return (
                <div key={serviceDetail.name} className='2xs:w-full sm:w-1/3 p-4'>
                  <ServiceDetailComponent service={serviceDetail} />
                </div>
              )
            })
          }
        </div>
      </div>
      )
}
