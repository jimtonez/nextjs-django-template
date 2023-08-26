"use client"
import React from 'react'
import Image from 'next/image'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useSession } from 'next-auth/react'

function Header() {

  const{ data: session } = useSession();

  return (
    <div className="z-10 flex fixed top-16 md:w-3/4 items-center font-mono text-sm">
        <div className="fixed mb-4 h-20 lg:h-[52px] left-0 top-0 text-center w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 hover:dark:border-neutral-700 transition ease-in dark:bg-zinc-800/30 dark:from-inherit lg:static lg:relative lg:rounded-full lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <div className="flex flex-row items center justify-center gap-2">
                <p className='hidden md:block'>
                    Welcome to the Next.js Django
                </p>
                <p className='text-yellow-600 hidden md:block'>
                    Golden Path Template!
                </p>
            </div>
            <div className='absolute top-0 lg:-top-4 lg:-left-4 p-4 cursor-pointer'>
                <a target="_blank" href="https://janus-idp.io">
                    <Image className='object-cover rounded-full' src="https://avatars.githubusercontent.com/u/117844786?s=200&v=4" alt="" width={50} height={50} />
                </a>
            </div>
            <div className='absolute -right-48 top-0 lg:-top-4 lg:-left-4 p-4 cursor-pointer'>
                {session ? (
                    <SignOut />
                ) : (
                    <SignIn />
                )}
            </div>
        </div>
    </div>
  )
}

export default Header