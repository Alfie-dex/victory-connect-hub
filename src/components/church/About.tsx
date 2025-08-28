import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to Our Church
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Victory Centre Church is a vibrant community of believers committed to knowing God, 
            growing in faith, and serving others with love and compassion.
          </p>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where Believers Are Made Disciples Indeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-smooth">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🙏</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Worship</h3>
            <p className="text-muted-foreground">
              Experience heartfelt worship that connects you with God and uplifts your spirit.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-smooth">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Community</h3>
            <p className="text-muted-foreground">
              Build lasting relationships and find your place in our loving church family.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-smooth">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Service</h3>
            <p className="text-muted-foreground">
              Make a difference in our community through acts of love and service.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
          <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
            WE GO, WE WIN, WE DISCIPLE, WE SEND
          </p>
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
          <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
            MAKING BELIEVERS DISCIPLES INDEED
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
