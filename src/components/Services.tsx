import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    PartyPopper,
    HardHat,
    MapPin,
    Users,
    Clock4,
    ShieldCheck,
} from "lucide-react";

const services = [
    {
        title: "Infra verkeersregelaars",
        description: "Professionele inzet bij wegenbouw, infraprojecten en verkeersmaatregelen.",
        icon: HardHat,
        color: "bg-traffic-blue"
    },
    {
        title: "Evenementen verkeersregelaars",
        description: "Veilige verkeersstromen tijdens evenementen en festivals.",
        icon: PartyPopper,
        color: "bg-traffic-orange"
    },
    {
        title: "Bouw verkeersregelaars",
        description: "Verkeersbegeleiding en veiligheid op en rond bouwplaatsen.",
        icon: MapPin,
        color: "bg-traffic-blue"
    },
    {
        title: "Calamiteiten service",
        description: "Direct inzetbaar bij spoedgevallen en onverwachte situaties.",
        icon: ShieldCheck,
        color: "bg-traffic-red"
    },
    {
        title: "Parkeerregelaars",
        description: "Efficiënte en klantvriendelijke parkeersturing bij drukke locaties.",
        icon: Users,
        color: "bg-traffic-blue"
    },
    {
        title: "24/7 bereikbaarheid",
        description: "Wij staan altijd paraat—ook in het weekend en tijdens feestdagen.",
        icon: Clock4,
        color: "bg-traffic-orange"
    },
];

const Services = () => {
    return (
        <section id="diensten" className="py-24 bg-gradient-to-br from-traffic-blue/10 to-background font-sans">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up [animation-delay:100ms]">
                    <h2 className="text-5xl font-extrabold text-traffic-blue mb-4 tracking-tight">
                        Onze verkeersdiensten
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Van infrastructuurprojecten tot evenementen: Uranu Services biedt deskundige, gecertificeerde verkeersregelaars voor elke situatie in Nederland.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="group border-0 rounded-xl shadow-elegant bg-gradient-to-br from-white to-traffic-blue/5 hover:shadow-glow hover:-translate-y-3 transition-all duration-500 animate-scale-in"
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                <CardHeader className="text-center">
                                    <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-traffic-blue group-hover:text-traffic-orange transition-colors duration-300">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground mb-4 text-center">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
                <div className="text-center mt-12 animate-fade-in [animation-delay:900ms]">
                    <Button
                        variant="secondary"
                        size="xl"
                        className="px-10 py-5 bg-traffic-orange hover:bg-traffic-orange/90 text-white font-bold shadow-glow hover:shadow-elegant transition-all duration-300"
                        asChild
                    >
                        <a href="#contact">Vraag direct een offerte aan</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Services;