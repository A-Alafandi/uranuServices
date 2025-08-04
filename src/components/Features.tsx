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
        color: "bg-traffic-blue"
    },
    {
        title: "Korte communicatielijnen met één vast aanspreekpunt",
        description: "Directe communicatie met uw vaste contactpersoon voor snelle en efficiënte service.",
        icon: Phone,
        color: "bg-traffic-orange"
    },
    {
        title: "Reserveteam altijd stand-by voor calamiteiten",
        description: "Ons reserveteam staat 24/7 klaar voor noodsituaties en onverwachte uitval.",
        icon: Shield,
        color: "bg-traffic-red"
    },
    {
        title: "Maatwerk oplossingen voor uw project",
        description: "Elke situatie is uniek. Wij bieden oplossingen op maat voor uw specifieke behoeften.",
        icon: Settings,
        color: "bg-traffic-blue"
    },
    {
        title: "Altijd bereikbaar, 24/7, inclusief weekenden",
        description: "Onze service stopt nooit. Wij zijn altijd bereikbaar, ook in het weekend en tijdens feestdagen.",
        icon: Clock,
        color: "bg-traffic-orange"
    },
    {
        title: "Ontzorgen is wat we doen",
        description: "Wij nemen de zorgen over verkeersveiligheid volledig uit uw handen, zodat u zich kunt focussen op uw kernactiviteiten.",
        icon: CheckCircle,
        color: "bg-traffic-red"
    }
];

const Features = () => {
    return (
        <section id="over-ons" className="py-24 bg-gradient-to-b from-traffic-blue/10 to-background font-sans">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up [animation-delay:100ms]">
                    <h2 className="text-5xl font-extrabold text-traffic-blue mb-6 tracking-tight">
                        Gecertificeerde verkeersregelaars huren
                        <span className="text-traffic-orange animate-float"> bij Uranu Services</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Het huren van verkeersregelaars zorgt voor veilige en geordende verkeersstromen, zelfs in de meest uitdagende situaties. Bij Uranu Services bieden wij ervaren professionals, afgestemd op uw behoeften.
                    </p>
                </div>
                <div className="mb-16 animate-fade-in [animation-delay:300ms]">
                    <h3 className="text-3xl font-bold text-center text-traffic-blue mb-4">
                        Uw partner in verkeersveiligheid
                    </h3>
                    <h4 className="text-2xl font-semibold text-center text-traffic-orange mb-12">
                        Waarom kiezen voor Uranu Services?
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group border-0 rounded-xl shadow-elegant bg-gradient-to-br from-white to-traffic-blue/5 hover:shadow-glow hover:-translate-y-3 transition-all duration-500 animate-scale-in"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <CardHeader className="text-center pb-4">
                                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-traffic-blue group-hover:text-traffic-orange transition-colors duration-300">
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