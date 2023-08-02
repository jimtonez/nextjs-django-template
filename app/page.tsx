import Image from 'next/image'
import Header from '@/components/Header'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between my-24 md:my-0 md:pb-16 lg:p-10">
      <>
        <Header />
        <Cards />
        <Footer />
      </>
    </main>
  )
}
