import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    "About Us", "Our Services", "Gallery", "Testimonials", 
    "Blog", "Career", "Help Center", "Contact Us"
  ];

  const services = [
    "Birthday Decorations", "Anniversary Surprises", "Candlelight Dinners",
    "Corporate Events", "Wedding Decorations", "Baby Shower", "Balloon Decorations", "Flower Arrangements"
  ];

  const cities = [
    "Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", 
    "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"
  ];

  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary to-romantic rounded-3xl p-8 md:p-12 mb-16 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Our Latest Offers
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to get exclusive discounts and celebration ideas delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full"
            />
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-romantic bg-clip-text text-transparent">
                CherishX
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Creating magical moments and unforgettable celebrations since 2020. 
              We specialize in transforming your special occasions into extraordinary experiences.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@cherishx.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Our Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Cities & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">We Serve In</h3>
            <div className="space-y-2 mb-6">
              {cities.slice(0, 6).map((city) => (
                <a
                  key={city}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {city}
                </a>
              ))}
              <a href="#" className="text-sm text-primary font-medium">
                + 10 more cities
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-primary">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", color: "text-blue-600" },
                  { icon: Instagram, href: "#", color: "text-pink-600" },
                  { icon: Twitter, href: "#", color: "text-blue-400" },
                  { icon: Youtube, href: "#", color: "text-red-600" }
                ].map(({ icon: Icon, href, color }) => (
                  <a
                    key={href}
                    href={href}
                    className={`w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${color} hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 CherishX. All rights reserved. Made with ❤️ for celebrations.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;