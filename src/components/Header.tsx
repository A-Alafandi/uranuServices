import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 animate-slide-in-left">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+31617038632" className="flex items-center gap-2 hover:text-primary-glow transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4" />
              Bel +31 6 17038632
            </a>
            <a href="mailto:info@uranuservices.nl" className="flex items-center gap-2 hover:text-primary-glow transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4" />
              info@uranuservices.nl
            </a>
          </div>
          <div className="hidden md:block animate-fade-in [animation-delay:300ms]">
            Opzoek naar verkeersregelaars? Begin hier.
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-card/80 backdrop-blur-md shadow-elegant sticky top-0 z-50 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-slide-in-left">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Uranu Services <span className="text-primary hover:text-primary-glow transition-colors duration-300">VKR</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Verkeersregelaar • Training • Certificering
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 animate-slide-in-right">
              <a href="#diensten" className="text-foreground hover:text-primary transition-all duration-300 relative group">
                <span>Diensten</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#over-ons" className="text-foreground hover:text-primary transition-all duration-300 relative group">
                <span>Over Ons</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 relative group">
                <span>Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button variant="hero" size="lg" className="hover:scale-105 hover:shadow-glow transition-all duration-300">
                Vraag Offerte
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;