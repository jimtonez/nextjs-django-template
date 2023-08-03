import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <>
        <a target="_blank" href="https://developers.redhat.com" className="z-20 fixed bottom-0 w-full border-t backdrop-blur-2xl dark:border-neutral-800 hover:dark:border-neutral-700 items-center justify-center font-mono text-sm cursor-pointer">
            <div className='flex flex-row items-center justify-center p-8 gap-4'>
                <p>Powered by</p>
                <Image className='object-cover' src="https://developers.redhat.com/themes/custom/rhdp2/images/branding/2023_RHDLogo_reverse.svg" alt="" width={125} height={125} />
            </div>
        </a>
    </>
  )
}

export default Footer