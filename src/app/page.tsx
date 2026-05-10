import {
  About,
  Contact,
  FocusAreas,
  Footer,
  Header,
  Hero,
  Projects,
} from "@/ui/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
