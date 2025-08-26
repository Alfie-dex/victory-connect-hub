import Navigation from "@/components/church/Navigation";
import Hero from "@/components/church/Hero";
import About from "@/components/church/About";
import Services from "@/components/church/Services";
import Gallery from "@/components/church/Gallery";
import Contact from "@/components/church/Contact";
import Footer from "@/components/church/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
