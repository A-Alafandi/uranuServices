import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Phone, Shield, Settings, Clock, CheckCircle } from "lucide-react";
import type { ComponentType } from "react";

/**
 * Tip (future-proofing):
 * - In de toekomst wil je foto's i.p.v. iconen tonen.
 *   Je kunt dan per item `imageSrc` invullen; zolang die ontbreekt valt het terug op `icon`.
 */
type FeatureItem = {
    title: string;
    description: string;
    icon?: ComponentType<{ className?: string }>;
    imageSrc?: string; // voor later: echte foto tonen
    color: string;
};

const features: FeatureItem[] = [
    {
        title: "Gecertificeerd & vakbekwaam",
        description:
            "Onze verkeersregelaars zijn intern getraind, VCA-georiënteerd en werken volgens de meest recente landelijke richtlijnen.",
        icon: GraduationCap,
        color: "bg-traffic-orange",
    },
    {
        title: "Één vast aanspreekpunt",
        description:
            "Korte lijnen, snelle schakeling. U heeft altijd een vaste contactpersoon die uw project en planning kent.",
        icon: Phone,
        color: "bg-traffic-dark",
    },
    {
        title: "Reserveteam paraat",
        description:
            "Onvoorziene uitval of een piekmoment? Ons reserveteam staat 24/7 stand-by voor directe inzet.",
        icon: Shield,
        color: "bg-traffic-dark",
    },
    {
        title: "Oplossingen op maat",
        description:
            "Elke locatie en situatie is anders. We stemmen bezetting, looproutes en bebording af op uw risico-analyse.",
        icon: Settings,
        color: "bg-traffic-orange",
    },
    {
        title: "Altijd bereikbaar",
        description:
            "Dag en nacht inzetbaar—ook in het weekend en tijdens feestdagen. Storingsdienst en spoedlijn beschikbaar.",
        icon: Clock,
        color: "bg-traffic-dark",
    },
    {
        title: "Complete ontzorging",
        description:
            "Van intake en vergunningcheck tot uitvoer en nazorg: wij nemen de regie uit handen en leveren meetbaar resultaat.",
        icon: CheckCircle,
        color: "bg-traffic-dark",
    },
];

const Features = () => {
    return (
        <section id="over-ons" className="py-16 sm:py-20 bg-white dark:bg-traffic-dark/90">
            <div className="container">
                <div className="text-center mb-12 max-w-3xl mx-auto motion-safe:animate-fade-in-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traffic-dark dark:text-white mb-6">
                        Waarom kiezen voor Uranu Services?
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground dark:text-white/80">
                        Met gecertificeerde verkeersregelaars, heldere communicatie en flexibele inzet zorgen wij voor veilige en
                        doorstromende verkeerssituaties—op elk moment, op elke locatie.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <Card
                                key={feature.title}
                                className="group border border-[hsl(var(--border))] hover:border-traffic-orange/50 transition-all duration-300 hover:shadow-glow motion-safe:animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader className="items-center">
                                    <div
                                        className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 dark:bg-opacity-90 overflow-hidden`}
                                    >
                                        {feature.imageSrc ? (
                                            <img
                                                src={feature.imageSrc}
                                                alt={feature.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        ) : IconComponent ? (
                                            <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                                        ) : null}
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-center text-traffic-dark dark:text-white">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-muted-foreground dark:text-white/80 text-sm sm:text-base">
                                    {feature.description}
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
