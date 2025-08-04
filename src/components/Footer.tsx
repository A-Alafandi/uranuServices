import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Uranu Services VKR</h3>
                <p className="text-sm text-primary-foreground/80">
                  Uw partner in verkeersveiligheid
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professionele verkeersregeling door heel Nederland. 
              Gecertificeerd, betrouwbaar en altijd bereikbaar.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Onze diensten</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Infra verkeersregelaars</li>
              <li>Evenementen regeling</li>
              <li>Bouw verkeersregelaars</li>
              <li>Calamiteiten service</li>
              <li>Parkeerregelaars</li>
              <li>Training & certificering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-medium">+31 6 17038632</p>
                  <p className="text-sm text-primary-foreground/80">24/7 bereikbaar</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <div>
                  <p className="font-medium">info@uranuservices.nl</p>
                  <p className="text-sm text-primary-foreground/80">Snelle reactie</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-medium">24/7 Service</p>
                  <p className="text-sm text-primary-foreground/80">Ook weekenden</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hulp nodig?</h4>
            <p className="text-primary-foreground/80 mb-4">
              Heeft u een verkeersregelaar nodig of wilt u er zelf een worden?
            </p>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full">
                Vraag offerte aan
              </Button>
              <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Word verkeersregelaar
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Uranu Services VKR. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Voorwaarden</a>
              <a href="#" className="hover:text-white transition-colors">Certificering</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;