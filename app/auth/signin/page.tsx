"use client"
import { getProviders } from "next-auth/react";
import SignInComponent from './SignInComponent'
import { ThemeProvider } from "next-themes";

async function SignIn() {

    const providers = await getProviders();

    return (
      <main className='flex h-screen w-screen flex-col overflow-y-scroll scrollbar-hide'>
        <ThemeProvider enableSystem={true} attribute='class'>
        <div className="flex m-auto pt-10 px-4">
          <div className="bg-gray-50 rounded-xl shadow-sm shadow-gray-300 dark:shadow-black border dark:border dark:bg-inherit border-yellow-500 dark:border-yellow-600 hover:border-gray-300 hover:dark:border-gray-600 hover:bg-inherit hover:dark:bg-zinc-900/30">
            <SignInComponent providers={providers} />
          </div>
        </div>
        </ThemeProvider>
      </main>
    )
  }
  
  export default SignIn