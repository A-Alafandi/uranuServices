import { Phone, Mail } from "lucide-react";
import HeroImage from "@/assets/img/HeroImage.webp";
import React from "react"; // keep image in src/assets/img

const Hero = () => {
    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
            aria-label="Introductiesectie"
        >
            {/* LCP-friendly hero image */}
            <img
                src={HeroImage}
                alt="traffic lights in officer on location"
                className="absolute inset-0 w-full h-full object-cover"
                width={1920}
                height={1080}
                decoding="async"
                loading="eager"
            />

            {/* Overlays for contrast */}
            <div className="absolute inset-0 bg-traffic-dark/50 pointer-events-none" aria-hidden="true" />
            <div
                className="absolute inset-0 bg-gradient-to-b from-traffic-dark/30 via-transparent to-traffic-dark/70 pointer-events-none"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 container py-16 sm:py-24 flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl leading-tight font-extrabold text-white text-center drop-shadow-lg mb-8 motion-safe:animate-fade-in-up">
                    Verkeersveiligheid
                    <br />
                    <span className="text-traffic-orange motion-safe:animate-float block">begint bij ons</span>
                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl text-center mx-auto mb-10 leading-relaxed motion-safe:animate-fade-in [animation-delay:200ms]">
                    Ervaren en gecertificeerde verkeersregelaars van Uranu Services,
                    uw partners in veilig en efficiënt verkeersbeheer door heel Nederland.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/85 motion-safe:animate-fade-in [animation-delay:600ms]">
                    <ContactCard
                        icon={<Phone className="w-7 h-7 text-white" />}
                        label="Bel direct"
                        value="+31 6 17038632"
                        href="tel:+31617038632"
                    />
                    <ContactCard
                        icon={<Mail className="w-7 h-7 text-white" />}
                        label="Email ons"
                        value="info@uranuservices.nl"
                        href="mailto:info@uranuservices.nl"
                    />
                </div>
            </div>

            {/* Moving traffic-lights line at the bottom — thicker, slower, with glow */}
            <div className="absolute left-0 bottom-0 w-full pointer-events-none z-0" aria-hidden="true">
                <div className="relative h-4 sm:h-6 md:h-8">
                    {/* Sharp core */}
                    <div className="absolute inset-0 bg-traffic-lights [background-size:240%_100%] motion-safe:animate-traffic-line [animation-duration:10s] opacity-90" />
                    {/* Soft glow (blurred) */}
                    <div className="absolute inset-0 bg-traffic-lights [background-size:240%_100%] motion-safe:animate-traffic-line [animation-duration:10s] blur-md opacity-60" />
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({
                         icon,
                         label,
                         value,
                         href,
                     }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) => {
    const inner = (
        <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-white/15 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 shadow-md">
                {icon}
            </div>
            <div className="text-left">
                <p className="text-sm opacity-80">{label}</p>
                <p className="font-semibold">{value}</p>
            </div>
        </div>
    );

    return href ? (
        <a
            href={href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
        >
            {inner}
        </a>
    ) : (
        inner
    );
};

export default Hero;
