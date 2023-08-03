"use client"
import { getProviders, useSession, signIn, signOut } from "next-auth/react"


export default function SignOut () {

    const { data: session } = useSession();

    const handleSignin = (e: any) => {
      e.preventDefault()
      signOut({ callbackUrl: "/"})
    }

    return (
        <button onClick={handleSignin} className='flex absolute top-4 right-52 lg:right-48 bg-black w-28 h-12 items-center justify-center rounded-full'>
            <h1 className='text-teal-400 text-xl'>Sign out</h1>
        </button>
    )
}