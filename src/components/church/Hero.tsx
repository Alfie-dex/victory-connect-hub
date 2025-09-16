import { Button } from "@/components/ui/button";
import heroImage from "@/assets/church-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          VICTORY CENTRE
          <br />
          <span className="text-secondary">CHURCH</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-slide-up">
          Where Believers Are Made Disciples Indeed
        </p>
        
        <p className="text-lg mb-12 text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up">
          Join us in worship, fellowship, and service as we grow together in faith and make a difference in our community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button variant="hero" size="lg">
            Join Us Sunday
          </Button>
          <Button variant="worship" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;