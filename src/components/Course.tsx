import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, BookOpen, Users, FileCheck2 } from "lucide-react";
import HeroImage from "@/assets/img/HeroImage.webp";

const OpleidingHero = () => (
    <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        aria-label="Opleiding verkeersregelaar"
    >
        {/* LCP-friendly hero image from /public (no import needed) */}
        <img
            src={HeroImage}
            alt="traffic lights in officer on location"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            decoding="async"
            loading="eager"
        />

        {/* Matching site hero overlays */}
        <div className="absolute inset-0 bg-traffic-dark/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-traffic-dark/20 to-traffic-dark/70" aria-hidden="true" />

        <div className="relative z-10 container text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg motion-safe:animate-fade-in-up">
                Opleiding Verkeersregelaar
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed motion-safe:animate-fade-in [animation-delay:200ms]">
                In <span className="font-semibold">3 dagen</span> van theorie naar praktijk en examen — inclusief
                weerbaarheidstraining en omgaan met agressie, begeleid door ervaren instructeurs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center motion-safe:animate-fade-in [animation-delay:350ms]">
                <Button asChild size="lg" className="bg-traffic-orange text-white hover:bg-traffic-orange/90">
                    <a href="#aanmelden">Meld je aan</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/60 text-black hover:bg-white/10">
                    <Link to="/#contact">Vragen? Neem contact op</Link>
                </Button>
            </div>
        </div>
    </section>
);

const highlights = [
    { icon: ShieldCheck, title: "Landelijke inzet", text: "Werken volgens actuele richtlijnen; inzetbaar door heel Nederland." },
    { icon: Users, title: "Kleine groepen", text: "Veel persoonlijke aandacht tijdens theorie en praktijk." },
    { icon: BookOpen, title: "Agressietraining", text: "Weerbaarheid & de-escalatie met realistische scenario’s." },
    { icon: FileCheck2, title: "Examenbegeleiding", text: "Begeleiding tot en met het praktijkexamen, inclusief feedback." },
];

export default function Course() {
    return (
        <>
            <OpleidingHero />

            {/* Highlights */}
            <section className="py-16 sm:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12 motion-safe:animate-fade-in-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Wat mag je verwachten?</h2>
                        <p className="text-base sm:text-lg text-muted-foreground mt-3">
                            Een intensief, praktijkgericht programma waarin je alle kennis en vaardigheden opdoet
                            om veilig en professioneel verkeer te regelen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map(({ icon: Icon, title, text }, i) => (
                            <Card
                                key={title}
                                className="glass-card border border-border/60 shadow-elegant motion-safe:animate-fade-in"
                                style={{ animationDelay: `${i * 120}ms` }}
                            >
                                <CardHeader className="items-center">
                                    <div className="w-12 h-12 rounded-xl bg-traffic-orange flex items-center justify-center shadow-glow mb-3">
                                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    <CardTitle className="text-center">{title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-muted-foreground">{text}</CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* (keep your other sections here, styled like the rest of the site) */}
        </>
    );
}
