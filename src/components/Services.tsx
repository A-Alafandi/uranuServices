import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Construction, 
  Calendar, 
  Building, 
  AlertTriangle, 
  Users, 
  Car, 
  Shield, 
  UserCheck,
  DollarSign 
} from "lucide-react";

const services = [
  {
    title: "Infra verkeersregelaars",
    description: "Professionele verkeersregeling voor infrastructuurprojecten",
    icon: Construction,
    color: "bg-primary"
  },
  {
    title: "Evenementen verkeersregelaars",
    description: "Veilige verkeersstromen tijdens evenementen en festivals",
    icon: Calendar,
    color: "bg-secondary"
  },
  {
    title: "Bouw verkeersregelaars",
    description: "Gespecialiseerde verkeersregeling voor bouwprojecten",
    icon: Building,
    color: "bg-accent"
  },
  {
    title: "Calamiteiten verkeersregelaars",
    description: "24/7 beschikbaar voor noodgevallen en calamiteiten",
    icon: AlertTriangle,
    color: "bg-destructive"
  },
  {
    title: "Coördinatoren",
    description: "Ervaren coördinatoren voor complexe projecten",
    icon: UserCheck,
    color: "bg-primary"
  },
  {
    title: "Parkeerregelaars",
    description: "Professionele parkeerregeling en -begeleiding",
    icon: Car,
    color: "bg-secondary"
  },
  {
    title: "Hoogwaardige verkeersregelaars",
    description: "Premium service voor kritische locaties",
    icon: Shield,
    color: "bg-accent"
  },
  {
    title: "Groep verkeersregelaars",
    description: "Teams van verkeersregelaars voor grote projecten",
    icon: Users,
    color: "bg-primary"
  },
  {
    title: "Goedkoop verkeersregelaars",
    description: "Betaalbare oplossingen zonder concessies aan kwaliteit",
    icon: DollarSign,
    color: "bg-secondary"
  }
];

const Services = () => {
  return (
    <section id="diensten" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Onze verkeersdiensten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van infrastructuurprojecten tot evenementen, wij bieden professionele 
            verkeersregeling voor elke situatie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 shadow-card bg-gradient-card backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    Lees meer
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 animate-fade-in [animation-delay:900ms]">
          <Button variant="hero" size="xl" className="hover:scale-105 hover:shadow-glow transition-all duration-300">
            Bekijk alle diensten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;