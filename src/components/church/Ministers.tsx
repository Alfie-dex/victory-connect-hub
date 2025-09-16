import { Card } from "@/components/ui/card";

const Ministers = () => {
  const ministers = [
    {
      id: 1,
      name: "Rev. Peter Kinuthia",
      title: "Senior Pastor",
      qualification: "BA Theology & Ministerial Studies"
    },
    {
      id: 2,
      name: "Pastor Gloria Karanja",
      title: "Associate Pastor"
    },
    {
      id: 3,
      name: "Eld. Steve",
      title: "Elder"
    },
    {
      id: 4,
      name: "Eld. Jane",
      title: "Elder"
    }
  ];

  return (
    <section id="ministers" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Ministers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated pastoral team committed to serving God and shepherding our church family with love, wisdom, and spiritual guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ministers.map((minister) => (
            <Card key={minister.id} className="p-8 shadow-elegant hover:shadow-glow transition-smooth">
              <div className="flex flex-col items-center text-center">
                {/* Minister photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-elegant">
                  {minister.id === 1 ? (
                    <img 
                      src="/lovable-uploads/rev-peter-kinuthia.jpg" 
                      alt={minister.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-4xl text-primary-foreground">👤</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {minister.name}
                </h3>
                
                <p className="text-lg font-semibold text-secondary mb-4">
                  {minister.title}
                </p>
                
                {minister.qualification && (
                  <p className="text-sm text-muted-foreground">
                    {minister.qualification}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <Card className="mt-16 p-8 max-w-4xl mx-auto shadow-elegant bg-background">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Leadership Philosophy</h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              "We believe in servant leadership that follows the example of Jesus Christ. Our ministers are called to 
              serve, guide, and nurture the spiritual growth of our congregation while building strong community bonds."
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">📖</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Biblical Teaching</h4>
                <p className="text-sm text-muted-foreground">Grounded in Scripture and practical application</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">❤️</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Pastoral Care</h4>
                <p className="text-sm text-muted-foreground">Compassionate support for all life seasons</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🌱</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Spiritual Growth</h4>
                <p className="text-sm text-muted-foreground">Nurturing discipleship and spiritual maturity</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Ministers;