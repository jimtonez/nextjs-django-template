"use client"
import { CgLogOut, CgMenuRight } from "react-icons/cg";
import { getProviders, useSession, signIn, signOut } from "next-auth/react"


export default function Menu() {

    const { data: session } = useSession();

    const handleSignOut = (e: any) => {
      e.preventDefault()
      signOut({ callbackUrl: "/"})
    }

    return (
        <button onClick={handleSignOut} className='flex absolute top-4 right-52 lg:right-48 bg-black border-2 border-yellow-600 w-[50px] h-[50px] items-center justify-center rounded-full hover:bg-gray-100 hover:bg-zinc-700 hover:dark:bg-zinc-700/30'>
            <div className='text-teal-400 text-2xl'>
                <CgMenuRight />
            </div>
        </button>
    )
}