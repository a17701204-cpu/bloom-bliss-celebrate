import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-romantic-dinner.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "A ROMANTIC DATE",
      subtitle: "TO REMEMBER",
      hashtag: "#CandlelightDinnerExperience",
      description: "Create unforgettable moments with our premium decoration services"
    },
    {
      image: heroImage,
      title: "CELEBRATE LOVE",
      subtitle: "EVERY DAY",
      hashtag: "#RomanticMoments",
      description: "Transform any space into a romantic paradise"
    },
    {
      image: heroImage,
      title: "MAKE MEMORIES",
      subtitle: "THAT LAST FOREVER",
      hashtag: "#CelebrationExperts",
      description: "Professional decoration services for every occasion"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={slides[currentSlide].image} 
          alt="Hero decoration"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-romantic/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 text-white space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                  <span className="text-accent font-semibold text-lg">
                    {slides[currentSlide].hashtag}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-lg">
                    {slides[currentSlide].title}
                  </span>
                  <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent drop-shadow-lg">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-romantic text-lg px-8 py-4 h-auto">
                  Book Your Experience
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto">
                  View Gallery
                </Button>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:block">
              <div className="flex flex-col gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden absolute bottom-4 right-4 z-10 flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;