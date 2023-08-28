import Header from '@/components/Header'
import Pods from '@/components/Pods'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-around my-24 pb-8 md:pb-28 md:my-0">
      <>
        <Header />
        <Pods />
        <Footer />
      </>
    </main>
  )
}
