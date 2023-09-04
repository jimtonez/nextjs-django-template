"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PageProps {
  searchParams?: { 
      name: string, 
      image: string,
      description: string,
      tags: any
  }
}

export default function Service ({ searchParams }: PageProps) {

  const { data: session}  = useSession()
  const name = searchParams!.name
  const image = searchParams!.image
  const description = searchParams!.description
  const tags = JSON.parse(searchParams?.tags)

  const data = {
      name: name,
      image: image,
      description: description,
      tags: tags
  }

  return (
    <main className="flex relative min-h-screen flex-col items-center justify-start p-4 mt-16">
      <ThemeProvider enableSystem={true} attribute='class'>
      <>
        <Header />
          <div className="flex flex-col w-full lg:w-9/12 items-center space-y-2 border-b border-gray-300 dark:border-neutral-800 py-4">
            <div className='flex h-full w-full items-start justify-start space-x-4'>
              <Image src={data.image} alt="" width={100} height={100} />
                <div className="flex flex-col items-start justify-start space-y-2">
                  <h1 className='text-5xl font-extrabold text-zinc-900 dark:text-white'>{data.name}</h1>
                  <p className='text-gray-500 dark:text-gray-600 text-lg lg:text-xl'>{data.description}</p>
                </div>
            </div>
            <div className='flex w-full flex-row items-start justify-end space-x-4'>
                  {data.tags.map((tag: any, i: number) =>
                      <div key={i} className="flex rounded-md items-center justify-start h-8 py-3 px-2 bg-gray-300/30 dark:bg-zinc-700/30 text-teal-400 text-sm space-x-1">
                        <Image className="" src={tag.icon} alt="" width={16} height={16} />
                        <p>{tag.name}</p>
                      </div>
                  )}
              </div>
          </div>
        <Footer />
      </>
      </ThemeProvider>
    </main>
  )
}