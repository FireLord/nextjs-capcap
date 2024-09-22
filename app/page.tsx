import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Price } from "./components/Price";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Features />
        <Price />
      </div>
      <Footer />
    </>
  );
}
