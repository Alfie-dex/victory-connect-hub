import { Card } from "@/components/ui/card";

const Ministers = () => {
  const ministers = [
    {
      id: 1,
      name: "Pastor John Kamau",
      title: "Senior Pastor",
      description: "Pastor John has been leading Victory Centre Church with passion and dedication for over 15 years. His heart for evangelism and community building has transformed countless lives.",
      email: "pastor.john@victorycentrechurch.org",
      phone: "+254 712 345 678"
    },
    {
      id: 2,
      name: "Pastor Mary Wanjiku",
      title: "Associate Pastor",
      description: "Pastor Mary oversees our women's ministry and youth programs. Her compassionate leadership and biblical teaching have strengthened our church family.",
      email: "pastor.mary@victorycentrechurch.org",
      phone: "+254 723 456 789"
    },
    {
      id: 3,
      name: "Pastor David Mwangi",
      title: "Youth Pastor",
      description: "Pastor David leads our vibrant youth ministry, connecting with the next generation through relevant teaching and dynamic worship experiences.",
      email: "pastor.david@victorycentrechurch.org",
      phone: "+254 734 567 890"
    },
    {
      id: 4,
      name: "Pastor Grace Njeri",
      title: "Children's Pastor",
      description: "Pastor Grace has a special calling to minister to children and families. Her creative approach to teaching makes God's word come alive for our little ones.",
      email: "pastor.grace@victorycentrechurch.org",
      phone: "+254 745 678 901"
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
                {/* Placeholder for minister photo */}
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mb-6 shadow-elegant">
                  <span className="text-4xl text-primary-foreground">👤</span>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {minister.name}
                </h3>
                
                <p className="text-lg font-semibold text-secondary mb-4">
                  {minister.title}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {minister.description}
                </p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span>{minister.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📱</span>
                    <span>{minister.phone}</span>
                  </div>
                </div>
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