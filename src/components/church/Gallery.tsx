import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  // Sample placeholder images - these would be replaced with actual church photos
  const photos = [
    { id: 1, title: "Sunday Worship Service", category: "worship" },
    { id: 2, title: "Community Outreach", category: "outreach" },
    { id: 3, title: "Youth Fellowship", category: "youth" },
    { id: 4, title: "Bible Study Group", category: "study" },
    { id: 5, title: "Church Anniversary", category: "events" },
    { id: 6, title: "Baptism Ceremony", category: "baptism" },
    { id: 7, title: "Christmas Celebration", category: "events" },
    { id: 8, title: "Prayer Meeting", category: "prayer" },
  ];

  const videos = [
    { id: 1, title: "Sunday Service Highlights", duration: "15:30" },
    { id: 2, title: "Pastor's Message - Faith in Action", duration: "28:45" },
    { id: 3, title: "Youth Testimony", duration: "8:20" },
    { id: 4, title: "Church Choir Performance", duration: "12:15" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of worship, fellowship, and God's work in our community
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth group">
                <div className="aspect-square bg-gradient-section relative overflow-hidden">
                  {/* Placeholder for actual photos */}
                  <div className="w-full h-full bg-gradient-primary/20 flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-smooth flex items-center justify-center">
                    <Button variant="worship" size="sm">
                      View Photo
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-primary text-sm">{photo.title}</h4>
                  <p className="text-xs text-muted-foreground capitalize">{photo.category}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="secondary" size="lg">
              View All Photos
            </Button>
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Videos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth group">
                <div className="aspect-video bg-gradient-section relative overflow-hidden">
                  {/* Placeholder for actual videos */}
                  <div className="w-full h-full bg-gradient-primary/20 flex items-center justify-center">
                    <span className="text-6xl">▶️</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-smooth flex items-center justify-center">
                    <Button variant="worship" size="lg">
                      Watch Video
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-primary mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience our worship and teachings through these recorded services and special moments.
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="secondary" size="lg">
              View All Videos
            </Button>
          </div>
        </div>

        {/* Upload Section */}
        <Card className="mt-16 p-8 max-w-2xl mx-auto shadow-elegant bg-gradient-section text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Share Your Moments</h3>
          <p className="text-muted-foreground mb-6">
            Have photos or videos from church events? We'd love to feature them in our gallery.
          </p>
          <Button variant="default" size="lg">
            Submit Photos/Videos
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Gallery;