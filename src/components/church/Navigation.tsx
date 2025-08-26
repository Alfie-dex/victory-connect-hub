import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/58e2d640-3cf3-42ad-bcfe-a4bcc37fe83f.png" 
            alt="Victory Centre Church Logo" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-primary">
            VICTORY CENTRE CHURCH
          </span>
        </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#ministers" className="text-foreground hover:text-primary transition-smooth">
              Ministers
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-smooth">
              Gallery
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <Button variant="default" size="sm">
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;