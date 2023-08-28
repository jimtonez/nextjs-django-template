"use client"
import Image from "next/image"
import { services } from '@/constants'

function Pods() {

    return (
        <div className="mx-auto py-4 md:pt-16 lg:mt-0 lg:pt-24 lg:py-0 px-6 lg:px-24 xl:w-10/12">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <span className="emoji text-3xl" role="img" aria-label="rocket"></span>
                <p className="text-4xl text-white font-bold pl-3 cursor-default">Nextjs Django</p>
                <p className="text-4xl text-yellow-600 font-bold pl-3 cursor-default">Golden Path Template</p>
          </div>
        <div role="hidden" className="mt-12 border-t border-gray-700">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-teal-400 border border-teal-400 bg-zinc-900 rounded-full">Modules</span>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 space-y-4 md:space-y-0 mb-12">
          {Object.values(services).map((service, i) => (
            <a key={i} target="_blank" href={service.url} className="py-5 lg:py-12 px-7 lg:px-12 w-full bg-inherit border border-yellow-600 hover:border-gray-700 hover:bg-zinc-900/30 shadow-lg shadow-black rounded-xl">
              <div className="flex w-full items-center justify-center space-x-4">
                <div className="flex w-1/4 h-1/4 lg:w-3/4 lg:h-3/4 items-center justify-center p-2">
                    <Image className="" src={service.image} alt="" width={100} height={100} />
                </div>
                <div className="flex lg:hidden w-3/4 lg:w-1/2 items-center justify-start">
                    <span className="font-bold text-4xl text-white">{service.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-12">
          <div className="space-y-2 text-center">
            <span className="block text-sm tracking-wide text-gray-500">By signing up, you agree to the Terms of Service. View our Privacy Policy.</span>
          </div>
        </div>
      </div>
    )
}

export default Pods