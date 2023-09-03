"use client"
import Image from "next/image"
import { services } from '@/constants'

function Pods() {

    return (
        <div className="mx-auto md:pt-16 lg:mt-0 lg:mt-24 lg:py-0 px-6 lg:px-24 xl:w-10/12">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <span className="emoji text-3xl" role="img" aria-label="rocket"></span>
                <p className="text-3xl sm:text-4xl text-zinc-900 dark:text-white font-extrabold pl-3 cursor-default">Next.js Django</p>
                <p className="text-3xl sm:text-4xl text-yellow-500 dark:text-yellow-600 font-extrabold pl-3 cursor-default">Golden Path Template</p>
          </div>
        <div role="hidden" className="mt-8 border-t border-gray-300 dark:border-neutral-800">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-teal-400 border border-teal-400 bg-gray-50 dark:bg-zinc-900 rounded-full">Modules</span>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 space-y-4 md:space-y-0 mb-12">
            {Object.values(services).map((service, i) => (
                <a key={i} target="_blank" href={service.url} className="p-4 w-full bg-inherit dark:bg-inherit border border-yellow-500 dark:border-yellow-600 hover:border-gray-300 hover:dark:border-neutral-800 hover:bg-inherit hover:dark:bg-zinc-900/30 shadow-sm shadow-gray-300 dark:shadow-black rounded-xl">
                    <div className="flex flex-col w-full h-[200px] sm:h-[225px] md:h-[200px] lg:h-[200px] items-start lg:items-start justify-start space-y-5 lg:space-y-4">
                        <div className="flex flex-row w-full h-[75px] items-start justify-around space-x-1 lg:space-x-2 xl:space-x-2">
                            <div className="flex mt-1 w-[75px] h-[75px] sm:w-[80px] sm:h-[80px] md:w-[65px] md:h-[65px] lg:w-[55px] lg:h-[55px] xl:w-[70px] xl:h-[70px]">
                                <Image className="" src={service.image} alt="" width={100} height={100} />
                            </div>
                            <div className="flex flex-col h-[85px] w-3/4 items-start justify-start">
                                <h2 className="font-extrabold text-4xl lg:text-3xl text-zinc-900 dark:text-white">{service.name}</h2>
                                <p className="font-normal line-clamp-2 text-base text-gray-500 dark:text-gray-600">{service.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, t) => (
                              <div key={t} className="flex flex-row rounded-md items-center justify-start h-8 py-3 px-2 bg-gray-300/30 dark:bg-zinc-700/30 text-teal-400 text-sm space-x-1">
                                  <Image className="" src={tag.icon} alt="" width={16} height={16} />
                                  <p>{tag.name}</p>
                              </div>

                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
        <div className="border-t border-gray-300 dark:border-neutral-800 pt-12">
          <div className="space-y-2 text-center">
            <span className="block text-sm tracking-wide text-gray-500">By signing up, you agree to the Terms of Service. View our Privacy Policy.</span>
          </div>
        </div>
      </div>
    )
}

export default Pods