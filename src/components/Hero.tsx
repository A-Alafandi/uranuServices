import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Verkeersveiligheid<br />
            <span className="text-primary-glow">begint bij ons</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ervaren en gecertificeerde verkeersregelaars van Uranu Services, 
            uw partners in veilig en efficiënt verkeersbeheer door heel Nederland.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="xl" className="shadow-lg">
              Ik zoek verkeersregelaars
            </Button>
            <Button variant="accent" size="xl" className="shadow-lg">
              Vraag Offerte
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm">Bel direct</p>
                <p className="font-semibold">+31 6 17038632</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm">Email ons</p>
                <p className="font-semibold">info@uranuservices.nl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;