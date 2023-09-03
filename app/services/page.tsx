"use client"
import { getProviders } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Pods from "@/components/Pods";

function Services() {

    // const providers = await getProviders();

    return (
        <main className="flex relative min-h-screen flex-col items-center justify-around my-24 pb-8 md:pb-28 md:my-12">
            <ThemeProvider enableSystem={true} attribute='class'>
                <Header />
                <Pods />
                <Footer />
            </ThemeProvider>
        </main>
    )
  }
  
  export default Services