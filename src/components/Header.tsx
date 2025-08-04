import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+31617038632" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
              <Phone className="w-4 h-4" />
              Bel +31 6 17038632
            </a>
            <a href="mailto:info@uranuservices.nl" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
              <Mail className="w-4 h-4" />
              info@uranuservices.nl
            </a>
          </div>
          <div className="hidden md:block">
            Opzoek naar verkeersregelaars? Begin hier.
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Uranu Services <span className="text-primary">VKR</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Verkeersregelaar • Training • Certificering
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#diensten" className="text-foreground hover:text-primary transition-colors">
                Diensten
              </a>
              <a href="#over-ons" className="text-foreground hover:text-primary transition-colors">
                Over Ons
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button variant="hero" size="lg">
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