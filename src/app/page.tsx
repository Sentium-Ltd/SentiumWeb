import {
  About,
  AiNative,
  Contact,
  FocusAreas,
  Footer,
  ForBusiness,
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
        <AiNative />
        <About />
        <FocusAreas />
        <ForBusiness />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
