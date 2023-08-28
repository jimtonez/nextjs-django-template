"use client"
import { CgUserAdd, CgLogIn } from 'react-icons/cg'
import { getProviders, useSession, signIn } from "next-auth/react"


export default function SignIn () {

    const { data: session } = useSession();

    const handleSignin = (e: any) => {
      e.preventDefault()
      signIn()
    }

    return (
        <button onClick={handleSignin} className='flex absolute top-4 right-52 lg:right-48 bg-black w-[50px] h-[50px] items-center justify-center rounded-full border-2 border-yellow-600 hover:border hover:border-neutral-700 hover:bg-zinc-900/30'>
            <div className='text-teal-400 text-2xl'>
                <CgLogIn />
            </div>
        </button>
    )
}