"use client"
import { getProviders } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

async function Profile() {

    const providers = await getProviders();

    return (
        <main className="flex relative min-h-screen flex-col items-center justify-between my-24 md:my-0 md:pb-16 lg:p-10">
            <ThemeProvider enableSystem={true} attribute='class'>
                <Header />
                <Footer />
            </ThemeProvider>
        </main>
    )
  }
  
  export default Profile