import { getProviders } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

async function Profile() {

    const providers = await getProviders();

    return (
        <main className="flex relative min-h-screen flex-col items-center justify-between my-24 md:my-0 md:pb-16 lg:p-10">
        <>
          <Header />
          <Footer />
        </>
      </main>
    )
  }
  
  export default Profile