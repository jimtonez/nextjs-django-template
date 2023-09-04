import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Service {
    // serviceName: string
    serviceImage: StaticImageData
}

function Service( service: Service) {
  return (
    <div className="mx-auto md:pt-16 lg:mt-0 lg:mt-24 lg:py-0 px-6 lg:px-24 xl:w-10/12">
        {/* <h1>{service.serviceName}</h1> */}
        <Image src={service.serviceImage} alt="" width={100} height={100} />
    </div>
  )
}

export default Service