import Hero from "@/components/Hero";
import Services from "./distribution/page";
import About from "./about/page";
import SharedFaqs from "./shared/SharedFaqs";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <SharedFaqs />
      <Contact />
    </main>
  );
}
