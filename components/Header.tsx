"use client"
import React from 'react'
import Image from 'next/image'
import SignIn from './SignIn'
import Menu from './Menu'
import { CgSun, CgMoon } from 'react-icons/cg'
import { useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function Header() {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        setMounted(true);
    },[])

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if(currentTheme === "dark"){
            return (
                <button className='flex text-teal-400 hover:text-yellow-600 text-2xl absolute top-5 right-52 lg:right-48 w-[42px] h-[42px] hover:dark:bg-zinc-700/30 items-center justify-center rounded-full' onClick={() => setTheme('light')}>
                    <CgSun />
                </button>
            )
        } else {
            return (
                <button className='flex text-teal-400 hover:text-indigo-600 text-2xl absolute top-5 right-52 lg:right-48 w-[42px] h-[42px] hover:bg-gray-100 items-center justify-center rounded-full' onClick={() => setTheme('dark')}>
                    <CgMoon />
                </button>
            )   
        }
    }

    return (
        <div className="z-10 flex fixed top-4 md:w-3/4 lg:w-full lg:px-16 xl:px-28 items-center font-mono text-sm">
            <div className="fixed mb-4 h-20 lg:h-[52px] left-0 top-0 text-center w-full border-b border-gray-300 dark:bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900/30 dark:from-inherit lg:static lg:relative lg:rounded-full lg:border lg:p-4 lg:dark:bg-zinc-800/30">
                <div className="flex flex-row text-base items center justify-center gap-2">
                    <p className='hidden md:block'>
                        Welcome to the Next.js Django
                    </p>
                    <p className='text-yellow-500 dark:text-yellow-600 hidden md:block'>
                        Golden Path Template!
                    </p>
                </div>
                <div className='absolute top-0 lg:-top-4 lg:-left-4 p-4 cursor-pointer'>
                    <a target="_blank" href="https://janus-idp.io">
                        <Image className='object-cover rounded-full' src="https://avatars.githubusercontent.com/u/117844786?s=200&v=4" alt="" width={50} height={50} />
                    </a>
                </div>
                {session ? (
                    <>
                        <div className='absolute -right-48 top-0 lg:-top-4 lg:-left-4 p-4 cursor-pointer'>
                            <Menu />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='absolute -right-48 top-0 lg:-top-4 lg:-left-4 p-4 cursor-pointer'>
                            <SignIn />
                        </div>
                    </>

                )}
                <div className='absolute -right-32 top-0 lg:-top-4 lg:-left-4 p-4 cursor-pointer'>
                    {renderThemeChanger()}
                </div>
            </div>
        </div>
  )
}

export default Header