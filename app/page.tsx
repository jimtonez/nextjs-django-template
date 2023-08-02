import Image from 'next/image'
import Header from '@/components/Header'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex relative min-h-screen min-w-screen flex-col items-center justify-between p-24 lg:p-10">
      <>
        <Header />
        <Cards />
        <Footer />
      </>
    </main>
  )
}
