import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Testimonial } from "./sections/Testimonial";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Hero />
        <Features />
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}
