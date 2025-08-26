const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VICTORY CENTRE CHURCH</h3>
            <p className="text-primary-foreground/80 mb-4">
              A place where faith meets community, and lives are transformed by God's love.
            </p>
            <p className="text-primary-foreground/60">
              "For where two or three gather in my name, there am I with them." - Matthew 18:20
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-secondary transition-smooth">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="#services" className="hover:text-secondary transition-smooth">Services</a></li>
              <li><a href="#gallery" className="hover:text-secondary transition-smooth">Gallery</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Malewa Rd, Komarock</p>
              <p>Nairobi, Kenya</p>
              <p>(555) 123-PRAY</p>
              <p>victorycentres1994@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Victory Centre Church. All rights reserved. Built with love and faith.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;