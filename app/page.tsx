import Header from "./components/Header";
import Hero from "./components/Hero";
import Farm from "./components/Farm";
import Pricing from "./components/Pricing";
import Talam from "./components/Talam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <Farm />
        <Pricing />
        <Talam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
