import React from 'react'
import { services } from '@/constants'
import Image from 'next/image'

function Cards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-2xl md:max-w-7xl xl:grid-cols-4 gap-4 mb-10 md:mb-20 lg:mb-32 xl:mb-72">
        {services.map((service, i) => (
            <a key={i} target="_blank" href={service.url} className="col-span-1 border dark:border-neutral-800 hover:dark:border-neutral-700 dark:bg-zinc-800/30 dark:from-inherit rounded-md shadow-md cursor-pointer w-80 md:w-72 transition ease-in hover:scale-[101%]">
                <div className="flex-col gap-2">
                    <div className="flex bg-[#151515] border-b dark:border-neutral-800 justify-center rounded-t-md shadow-md shadow-b pb-4">
                        <p className="mt-4 font-semibold">{service.name}</p>
                    </div>
                    <div className="p-10 flex justify-center">
                        <Image className="" src={service.image} alt="" width={120} height={120} />
                    </div>
                </div>
            </a>
        ))}
    </section>
  )
}

export default Cards