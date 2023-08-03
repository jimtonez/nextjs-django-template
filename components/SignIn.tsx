"use client"
import { getProviders, useSession, signIn } from "next-auth/react"


export default function SignIn () {

    const { data: session } = useSession();

    const handleSignin = (e: any) => {
      e.preventDefault()
      signIn()
    }

    return (
        <button onClick={handleSignin} className='flex absolute top-4 right-52 lg:right-48 bg-black w-28 h-12 items-center justify-center rounded-full'>
            <h1 className='text-teal-400 text-xl'>Sign in</h1>
        </button>
    )
}