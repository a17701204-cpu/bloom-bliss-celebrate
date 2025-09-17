import { Heart, Calendar, Gift, Utensils, Palette, Sparkles, Baby, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import birthdayImage from "@/assets/category-birthday.jpg";
import anniversaryImage from "@/assets/category-anniversary.jpg";
import corporateImage from "@/assets/category-corporate.jpg";
import flowersImage from "@/assets/category-flowers.jpg";

const CategoryShowcase = () => {
  const categories = [
    {
      icon: Calendar,
      title: "Birthday Decorations",
      description: "Colorful and joyful birthday setups",
      image: birthdayImage,
      price: "Starting ₹2,999",
      gradient: "from-primary to-romantic"
    },
    {
      icon: Heart,
      title: "Anniversary Surprises",
      description: "Romantic celebrations for couples",
      image: anniversaryImage,
      price: "Starting ₹3,999", 
      gradient: "from-romantic to-accent"
    },
    {
      icon: Sparkles,
      title: "Balloon Decorations",
      description: "Elegant balloon arrangements",
      image: birthdayImage,
      price: "Starting ₹1,999",
      gradient: "from-accent to-primary"
    },
    {
      icon: Utensils,
      title: "Candlelight Dinners",
      description: "Intimate dining experiences",
      image: anniversaryImage,
      price: "Starting ₹4,999",
      gradient: "from-primary to-celebration"
    },
    {
      icon: Gift,
      title: "Flower Bouquets",
      description: "Fresh and beautiful arrangements",
      image: flowersImage,
      price: "Starting ₹799",
      gradient: "from-romantic to-primary"
    },
    {
      icon: Palette,
      title: "Romantic Room Setups",
      description: "Transform any space into romance",
      image: anniversaryImage,
      price: "Starting ₹3,499",
      gradient: "from-accent to-romantic"
    },
    {
      icon: Gift,
      title: "Personalized Gifts",
      description: "Custom gifts for every occasion",
      image: flowersImage,
      price: "Starting ₹999",
      gradient: "from-celebration to-accent"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional event decorations",
      image: corporateImage,
      price: "Starting ₹9,999",
      gradient: "from-primary to-accent"
    }
  ];

  const featuredCategories = [
    {
      title: "Romantic Experiences",
      description: "Perfect for couples celebrating love",
      image: anniversaryImage,
      categories: ["Candlelight Dinners", "Anniversary Setups", "Romantic Rooms"],
      color: "romantic"
    },
    {
      title: "Birthday Celebrations",
      description: "Make every birthday unforgettable",
      image: birthdayImage,
      categories: ["Theme Decorations", "Balloon Arrangements", "Birthday Cakes"],
      color: "primary"
    },
    {
      title: "Corporate Events",
      description: "Professional and elegant setups",
      image: corporateImage,
      categories: ["Office Parties", "Product Launches", "Team Building"],
      color: "accent"
    },
    {
      title: "Floral Arrangements",
      description: "Fresh flowers for every occasion",
      image: flowersImage,
      categories: ["Bouquets", "Centerpieces", "Garlands"],
      color: "celebration"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-romantic bg-clip-text text-transparent mb-4">
            Make Every Occasion Extra Special
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate celebrations to grand festivities, we create magical moments that last a lifetime
          </p>
        </div>

        {/* Category Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-sm font-medium text-center leading-tight group-hover:text-primary transition-colors">
                  {category.title.split(' ')[0]}<br />
                  <span className="text-xs text-muted-foreground">{category.title.split(' ').slice(1).join(' ')}</span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Featured Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((item, index) => (
            <Card 
              key={item.title}
              className="category-card card-hover group overflow-hidden border-0 bg-gradient-to-br from-white to-secondary/30"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  {item.categories.map((cat, catIndex) => (
                    <div 
                      key={cat}
                      className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-medium">{cat}</span>
                      <span className={`text-xs font-semibold text-${item.color}`}>Book Now</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full mt-4 bg-gradient-to-r from-${item.color} to-primary text-white hover:shadow-lg transition-all duration-300`}
                >
                  Explore {item.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-romantic/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Magic?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our expert team transform your vision into reality. From concept to execution, 
              we handle every detail to make your celebration perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-romantic text-lg px-8 py-4 h-auto">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;