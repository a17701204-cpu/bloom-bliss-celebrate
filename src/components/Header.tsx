import { useState } from "react";
import { Search, MapPin, User, ShoppingCart, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Anniversary", 
    "Birthdays", 
    "Gifts", 
    "Candlelight Dinners", 
    "Decorations", 
    "Festivals", 
    "Kid's Celebrations", 
    "Corporate Events"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border/50 py-2 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Hi, Guest</span>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="nav-item">My Account</a>
              <a href="#" className="nav-item">Track Order</a>
              <a href="#" className="nav-item">Help Center</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">DELHI NCR</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-romantic bg-clip-text text-transparent">
                CherishX
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="What are you celebrating?" 
                className="pl-10 rounded-full border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-romantic text-romantic-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Categories */}
        <nav className="hidden md:flex mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-center w-full gap-8">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="nav-item text-sm font-medium py-2 hover:text-primary transition-colors duration-300 relative group"
              >
                {category}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-romantic transition-all duration-300 group-hover:w-full"></div>
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="What are you celebrating?" 
                className="pl-10 rounded-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="nav-item text-sm font-medium py-2 px-3 text-center border border-border rounded-lg hover:bg-primary/5"
                >
                  {category}
                </a>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="outline" className="flex-1">
                My Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;