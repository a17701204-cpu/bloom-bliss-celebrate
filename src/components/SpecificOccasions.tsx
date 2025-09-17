import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import occasion images
import birthdayImage from "@/assets/occasion-birthday-special.jpg";
import babyShowerImage from "@/assets/occasion-baby-shower.jpg";
import candlelightImage from "@/assets/hero-romantic-dinner.jpg";
import babyWelcomeImage from "@/assets/occasion-baby-welcome.jpg";
import weddingImage from "@/assets/occasion-wedding.jpg";
import anniversaryImage from "@/assets/category-anniversary.jpg";

const SpecificOccasions = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const occasions = [
    {
      id: 'birthday',
      title: 'Birthday',
      image: birthdayImage,
      description: 'Colorful and joyful birthday celebrations',
      gallery: [
        { image: birthdayImage, title: 'Colorful Birthday Setup' },
        { image: "/api/placeholder/400/300", title: 'Balloon Arch Birthday' },
        { image: "/api/placeholder/400/300", title: 'Theme Birthday Party' },
        { image: "/api/placeholder/400/300", title: 'Kids Birthday Decoration' },
        { image: "/api/placeholder/400/300", title: 'Adult Birthday Celebration' },
        { image: "/api/placeholder/400/300", title: 'Surprise Birthday Setup' }
      ]
    },
    {
      id: 'baby-shower',
      title: 'Baby Shower',
      image: babyShowerImage,
      description: 'Elegant and tender baby shower decorations',
      gallery: [
        { image: babyShowerImage, title: 'Neutral Baby Shower' },
        { image: "/api/placeholder/400/300", title: 'Pink Baby Shower' },
        { image: "/api/placeholder/400/300", title: 'Blue Baby Shower' },
        { image: "/api/placeholder/400/300", title: 'Garden Baby Shower' },
        { image: "/api/placeholder/400/300", title: 'Elegant Baby Shower' },
        { image: "/api/placeholder/400/300", title: 'Floral Baby Shower' }
      ]
    },
    {
      id: 'candlelight-dinner',
      title: 'Candlelight Dinner',
      image: candlelightImage,
      description: 'Romantic intimate dining experiences',
      gallery: [
        { image: candlelightImage, title: 'Golden Tent Dinner' },
        { image: "/api/placeholder/400/300", title: 'Rooftop Candlelight Dinner' },
        { image: "/api/placeholder/400/300", title: 'Beach Romantic Dinner' },
        { image: "/api/placeholder/400/300", title: 'Garden Candlelight Setup' },
        { image: "/api/placeholder/400/300", title: 'Indoor Romantic Dinner' },
        { image: "/api/placeholder/400/300", title: 'Terrace Dinner Setup' }
      ]
    },
    {
      id: 'baby-welcome',
      title: 'Baby Welcome',
      image: babyWelcomeImage,
      description: 'Cheerful welcome home baby decorations',
      gallery: [
        { image: babyWelcomeImage, title: 'Blue Welcome Baby' },
        { image: "/api/placeholder/400/300", title: 'Pink Welcome Baby' },
        { image: "/api/placeholder/400/300", title: 'Gender Neutral Welcome' },
        { image: "/api/placeholder/400/300", title: 'Twin Babies Welcome' },
        { image: "/api/placeholder/400/300", title: 'Hospital Welcome Setup' },
        { image: "/api/placeholder/400/300", title: 'Home Welcome Decoration' }
      ]
    },
    {
      id: 'wedding',
      title: 'Wedding',
      image: weddingImage,
      description: 'Grand and elegant wedding ceremonies',
      gallery: [
        { image: weddingImage, title: 'Traditional Mandap Setup' },
        { image: "/api/placeholder/400/300", title: 'Beach Wedding Decoration' },
        { image: "/api/placeholder/400/300", title: 'Garden Wedding Setup' },
        { image: "/api/placeholder/400/300", title: 'Palace Wedding Decor' },
        { image: "/api/placeholder/400/300", title: 'Destination Wedding' },
        { image: "/api/placeholder/400/300", title: 'Reception Decoration' }
      ]
    },
    {
      id: 'anniversary',
      title: 'Anniversary',
      image: anniversaryImage,
      description: 'Romantic anniversary celebrations',
      gallery: [
        { image: anniversaryImage, title: 'Rose Anniversary Setup' },
        { image: "/api/placeholder/400/300", title: 'Golden Anniversary' },
        { image: "/api/placeholder/400/300", title: 'Silver Anniversary' },
        { image: "/api/placeholder/400/300", title: 'Surprise Anniversary' },
        { image: "/api/placeholder/400/300", title: 'Home Anniversary Setup' },
        { image: "/api/placeholder/400/300", title: 'Hotel Anniversary Decor' }
      ]
    }
  ];

  const openGallery = (occasion: any) => {
    setSelectedOccasion(occasion);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedOccasion(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedOccasion) {
      setCurrentImageIndex((prev) => 
        prev < selectedOccasion.gallery.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedOccasion) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedOccasion.gallery.length - 1
      );
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent-light/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-romantic bg-clip-text text-transparent mb-4">
            Celebrations by Occasion
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized decoration services tailored for every special moment in your life
          </p>
        </div>

        {/* Occasion Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {occasions.map((occasion) => (
            <div
              key={occasion.id}
              onClick={() => openGallery(occasion)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-secondary/30 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-lg">
                    <span className="text-sm font-semibold text-primary">View Gallery</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mt-3">
                <h3 className="font-semibold text-lg text-primary group-hover:text-romantic transition-colors duration-300">
                  {occasion.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {occasion.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedOccasion && (
          <Dialog open={!!selectedOccasion} onOpenChange={closeGallery}>
            <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary/10 to-romantic/10">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedOccasion.title} Gallery
                  </h3>
                  <p className="text-white/80">
                    {currentImageIndex + 1} of {selectedOccasion.gallery.length}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeGallery}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Image Display */}
              <div className="relative aspect-video">
                <img
                  src={selectedOccasion.gallery[currentImageIndex].image}
                  alt={selectedOccasion.gallery[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-white text-xl font-semibold">
                    {selectedOccasion.gallery[currentImageIndex].title}
                  </h4>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-6 bg-black/80">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedOccasion.gallery.map((item: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-primary scale-110' 
                          : 'border-white/20 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-gradient-to-r from-primary/10 to-romantic/10 flex gap-4 justify-center">
                <Button className="btn-romantic">
                  Book This Style
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Quote
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default SpecificOccasions;