import { LanguageProvider } from "@/components/LanguageProvider";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingPhoneButton } from "@/components/FloatingPhoneButton";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-slate-100 pb-20 font-sans">
        <NavBar />
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pt-8 sm:px-8 lg:px-12">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </div>
        <Footer />
      </main>
      <FloatingPhoneButton />
    </LanguageProvider>
  );
}
