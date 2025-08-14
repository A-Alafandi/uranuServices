import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper, HardHat, MapPin, Users, Clock4, ShieldCheck } from "lucide-react";
import type { ComponentType } from "react";

type ServiceItem = {
    title: string;
    description: string;
    icon?: ComponentType<{ className?: string }>;
    imageSrc?: string; // voor later: echte foto
    color: string;
};

const services: ServiceItem[] = [
    {
        title: "Infra-verkeersregelaars",
        description:
            "Deskundige inzet bij wegenbouw en infrastructurele werkzaamheden: veilig afsluiten, omleiden en doorstroming borgen.",
        icon: HardHat,
        color: "bg-traffic-orange",
    },
    {
        title: "Evenementen-verkeersregelaars",
        description:
            "Gastvrije ontvangst en duidelijke aansturing bij festivals, sport en markten—voor een positieve bezoekerservaring.",
        icon: PartyPopper,
        color: "bg-traffic-dark",
    },
    {
        title: "Bouwplaats-begeleiding",
        description:
            "Veiligheid op en rond de bouw: transportgeleiding, looproutes, signalering en samenwerking met BHV en uitvoerders.",
        icon: MapPin,
        color: "bg-traffic-orange",
    },
    {
        title: "Calamiteitenservice",
        description:
            "Snel opschalen bij storingen of incidenten. Reserve-inzet en flexibele ploegvorming binnen korte tijd.",
        icon: ShieldCheck,
        color: "bg-traffic-dark",
    },
    {
        title: "Parkeerregelaars",
        description:
            "Efficiënt parkeren met een vriendelijk gezicht. Minder wachtrijen, duidelijkheid voor bezoekers en hulpdiensten.",
        icon: Users,
        color: "bg-traffic-orange",
    },
    {
        title: "24/7 bereikbaarheid",
        description:
            "Altijd bereikbaar en inzetbaar—ook ’s nachts, in het weekend en tijdens feestdagen.",
        icon: Clock4,
        color: "bg-traffic-dark",
    },
];

const Services = () => {
    return (
        <section id="diensten" className="py-16 sm:py-24 bg-white dark:bg-traffic-dark/90">
            <div className="container">
                <div className="text-center mb-12 max-w-3xl mx-auto motion-safe:animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-traffic-dark dark:text-white mb-4 tracking-tight">
                        Onze verkeersdiensten
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Van infrastructurele projecten tot grote evenementen: Uranu Services levert gecertificeerde
                        verkeersregelaars met oog voor veiligheid, doorstroming en gastvrijheid.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={service.title}
                                className="group border-0 rounded-xl shadow-elegant bg-white dark:bg-traffic-dark/10 hover:shadow-glow hover:-translate-y-3 transition-all duration-500 motion-safe:animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader className="text-center">
                                    <div
                                        className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow dark:bg-opacity-90 overflow-hidden`}
                                    >
                                        {service.imageSrc ? (
                                            <img
                                                src={service.imageSrc}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        ) : IconComponent ? (
                                            <IconComponent className="w-7 h-7 text-white" aria-hidden="true" />
                                        ) : null}
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-traffic-dark dark:text-white group-hover:text-traffic-orange transition-colors duration-300">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground dark:text-white/80 text-sm sm:text-base text-center">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="text-center mt-12 motion-safe:animate-fade-in [animation-delay:900ms]">
                    <Button
                        size="xl"
                        className="btn bg-traffic-orange hover:bg-traffic-orange/90 text-white font-bold shadow-glow hover:shadow-elegant transition-all duration-300 px-6 sm:px-10 py-3 sm:py-5 min-h-[44px]"
                        asChild
                        aria-label="Vraag een offerte aan"
                    >
                        <a href="#contact">Vraag direct een offerte aan</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Services;
