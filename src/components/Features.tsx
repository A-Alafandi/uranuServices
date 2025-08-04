import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Phone, 
  Shield, 
  Settings, 
  Clock,
  CheckCircle
} from "lucide-react";

const features = [
  {
    title: "In-company opgeleide en gecertificeerde personeel",
    description: "Al onze verkeersregelaars zijn intern opgeleid en volledig gecertificeerd volgens de nieuwste veiligheidsnormen.",
    icon: GraduationCap,
    color: "bg-primary"
  },
  {
    title: "Korte communicatielijnen met één vast aanspreekpunt",
    description: "Directe communicatie met uw vaste contactpersoon voor snelle en efficiënte service.",
    icon: Phone,
    color: "bg-secondary"
  },
  {
    title: "Reserveteam altijd stand-by voor calamiteiten",
    description: "Ons reserveteam staat 24/7 klaar voor noodsituaties en onverwachte uitval.",
    icon: Shield,
    color: "bg-accent"
  },
  {
    title: "Maatwerk oplossingen voor uw project",
    description: "Elke situatie is uniek. Wij bieden oplossingen op maat voor uw specifieke behoeften.",
    icon: Settings,
    color: "bg-primary"
  },
  {
    title: "Altijd bereikbaar, 24/7, inclusief weekenden",
    description: "Onze service stopt nooit. Wij zijn altijd bereikbaar, ook in het weekend en tijdens feestdagen.",
    icon: Clock,
    color: "bg-secondary"
  },
  {
    title: "Ontzorgen is wat we doen",
    description: "Wij nemen de zorgen over verkeersveiligheid volledig uit uw handen, zodat u zich kunt focussen op uw kernactiviteiten.",
    icon: CheckCircle,
    color: "bg-accent"
  }
];

const Features = () => {
  return (
    <section id="over-ons" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Een gecertificeerde en ervaren verkeersregelaar huren 
            <span className="text-primary"> bij ons bedrijf</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Het huren van verkeersregelaars kan het verschil maken tussen chaos en geordende 
            verkeersstromen, vooral in drukke situaties. Bij ons bedrijf kunt u zowel verkeersregelaars 
            als ervaren parkeerregelaars huren, afgestemd op uw specifieke behoeften.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-4">
            Ontzorgen is wat we doen
          </h3>
          <h4 className="text-2xl font-semibold text-center text-primary mb-12">
            Waarom verkeersregelaars inhuren bij Uranu Services?
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-0 shadow-md h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground leading-snug">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;