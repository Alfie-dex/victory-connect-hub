import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Service Times
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for inspiring worship services throughout the week
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Sunday Worship</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-foreground">Morning Service</p>
                  <p className="text-muted-foreground">9:00 AM - 10:30 AM</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Evening Service</p>
                  <p className="text-muted-foreground">6:00 PM - 7:30 PM</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Dynamic worship, inspiring messages, and fellowship for the whole family
              </p>
              <Button variant="default" className="w-full">
                Plan Your Visit
              </Button>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Midweek Services</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-foreground">Bible Study</p>
                  <p className="text-muted-foreground">Tuesday 6:00 PM</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Prayer Meeting</p>
                  <p className="text-muted-foreground">Friday 6:30 PM</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Deepen your faith through study, prayer, and intimate fellowship
              </p>
              <Button variant="secondary" className="w-full">
                Join Bible Study
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 max-w-2xl mx-auto shadow-elegant bg-gradient-section">
            <h3 className="text-2xl font-bold text-primary mb-4">Special Events</h3>
            <p className="text-muted-foreground mb-6">
              Stay connected with our community through special services, 
              conferences, and outreach events throughout the year.
            </p>
            <Button variant="default">
              View Upcoming Events
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;