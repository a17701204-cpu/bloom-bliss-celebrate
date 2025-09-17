import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya & Arjun",
      occasion: "Anniversary Celebration",
      rating: 5,
      text: "CherishX made our 5th anniversary absolutely magical! The candlelight dinner setup was beyond our expectations. Every detail was perfect - from the rose petals to the ambient lighting. We felt like royalty!",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Neha Sharma",
      occasion: "Birthday Surprise",
      rating: 5,
      text: "My husband surprised me with the most beautiful birthday decoration through CherishX. The balloon arrangements and theme setup were incredible. The team was so professional and made everything stress-free!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Rajesh Kumar",
      occasion: "Corporate Event",
      rating: 5,
      text: "We organized our company's annual party with CherishX and it was a huge success! The team understood our requirements perfectly and delivered a sophisticated setup that impressed all our clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Anita & Dev",
      occasion: "Romantic Proposal", 
      rating: 5,
      text: "The proposal setup was a dream come true! CherishX created such a romantic atmosphere with fairy lights and flowers. She said YES and we couldn't have asked for a more perfect moment!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Meera Patel",
      occasion: "Baby Shower",
      rating: 5,
      text: "The baby shower decoration was absolutely adorable! Every guest was amazed by the creativity and attention to detail. CherishX made our special day even more memorable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${
          index < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
        }`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-romantic bg-clip-text text-transparent mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trusted us to make their celebrations extraordinary
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="testimonial-card border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-bold text-lg text-primary">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].occasion}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125 shadow-lg' 
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "10,000+", label: "Happy Customers", icon: "❤️" },
            { number: "50,000+", label: "Celebrations", icon: "🎉" },
            { number: "15+", label: "Cities", icon: "📍" },
            { number: "4.9/5", label: "Average Rating", icon: "⭐" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-romantic bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;