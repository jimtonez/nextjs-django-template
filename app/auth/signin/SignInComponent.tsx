"use client"
import { FcGoogle } from "react-icons/fc"
import Image from "next/image"
import { getProviders, signIn } from "next-auth/react"

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({ providers }: Props) {

    const renderIcon = (name: string) => {
      if ( name === 'Google') {
        return (
          <FcGoogle className="scale-150"/>
        )
      } else {
        return (
          <>
          </>
        )
      }
    }

    return (
        <div className="mx-auto py-12 px-2 sm:p-20 w-11/12 md:w-10/12">
          <div className="flex flex-col items-center justify-center">
            <span className="emoji text-3xl" role="img" aria-label="rocket"></span>
            <p className="text-2xl sm:text-3xl text-zinc-900 dark:text-white font-extrabold cursor-default">Next.js Django</p>
            <p className="text-2xl sm:text-3xl text-yellow-500 dark:text-yellow-600 font-extrabold cursor-default">Golden Path Template</p>
          </div>
        <div role="hidden" className="mt-12 border-t border-gray-300 dark:border-neutral-800">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-teal-400 border border-teal-400 bg-gray-50 dark:bg-zinc-900 rounded-full">Sign in with</span>
        </div>
        <div className="mt-12 grid grid-cols-1 space-y-4 mb-12 mx-auto">
          <div className="flex item-center justify-center">
          {Object.values(providers!).map((provider) => (
            <button key={provider.id} className="flex items-center justify-center space-x-4 p-4 w-3/4 bg-gray-50 dark:bg-inherit border border-yellow-500 dark:border-yellow-600 hover:border-gray-300 hover:dark:border-gray-600 hover:bg-inherit shadow-sm shadow-gray-300 dark:shadow-black rounded-lg" onClick={() => signIn(provider.id, { callbackUrl: "/services"})}>
                <div className="flex w-1/4 items-center justify-center">
                  {renderIcon(provider.name)}
                </div>
                <div className="flex w-3/4 items-center justify-start">
                <span className="font-medium text-md text-gray-600 dark:text-white">{provider.name}</span>
                </div>
            </button>
          ))}
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-neutral-800 pt-12">
          <div className="space-y-2 text-center">
            <span className="block text-sm tracking-wide text-gray-500">By signing up, you agree to the Terms of Service. View our Privacy Policy.</span>
          </div>
        </div>
      </div>
    )
}

export default SignInComponent