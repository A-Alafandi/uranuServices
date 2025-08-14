import { useState, useRef, type FormEvent } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, MapPin } from "lucide-react";

/**
 * ContactForm — stijlgealigned met de rest van de site
 * - Neutraal/donker glas i.p.v. blauwe vlakken
 * - Consistente typografie, knoppen en schaduwen
 * - Duidelijke copy in verzorgd Nederlands
 * - Klaar voor integratie met jouw submit endpoint
 */

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: vervang dit met jouw eigen submitlogica / fetch naar endpoint
        setTimeout(() => setSubmitted(true), 600);
    };

    return (
        <section id="contact" className="py-20 sm:py-24 bg-background text-foreground scroll-mt-24">
            <div className="container">
                {/* Kop */}
                <div className="text-center max-w-3xl mx-auto mb-12 motion-safe:animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Neem contact op
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground mt-4">
                        Vragen, een spoedopdracht of een vrijblijvende offerte? Laat uw gegevens achter en we reageren snel.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Informatiekaart */}
                    <Card className="glass-card border border-border/60 shadow-elegant motion-safe:animate-fade-in">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Direct contact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <InfoRow
                                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
                                label="Telefoon"
                                value="+31 6 17038632"
                                href="tel:+31617038632"
                            />
                            <InfoRow
                                icon={<Mail className="w-5 h-5" aria-hidden="true" />}
                                label="E-mail"
                                value="info@uranuservices.nl"
                                href="mailto:info@uranuservices.nl"
                            />
                            <InfoRow
                                icon={<MapPin className="w-5 h-5" aria-hidden="true" />}
                                label="Regio"
                                value="Landelijk inzetbaar (NL)"
                            />

                            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
                                {[
                                    "Gecertificeerde verkeersregelaars",
                                    "24/7 bereikbaar en inzetbaar",
                                    "Snel opschalen bij piek & calamiteit",
                                    "Vast aanspreekpunt tijdens uw project",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-traffic-orange" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Formulierkaart */}
                    <Card className="glass-card border border-border/60 shadow-elegant motion-safe:animate-fade-in [animation-delay:120ms]">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Stuur ons een bericht</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {submitted ? (
                                <div className="text-center py-10">
                                    <h3 className="text-2xl font-bold">Bedankt!</h3>
                                    <p className="text-muted-foreground mt-2">
                                        Uw bericht is ontvangen. We nemen zo snel mogelijk contact met u op.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-6"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Verstuur nog een bericht
                                    </Button>
                                </div>
                            ) : (
                                <form
                                    ref={formRef}
                                    className="grid gap-6"
                                    onSubmit={onSubmit}
                                    action="#"
                                    method="POST"
                                    autoComplete="off"
                                >
                                    <div className="grid gap-2">
                                        <label htmlFor="name" className="font-medium">Naam</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Uw volledige naam"
                                            minLength={2}
                                            required
                                            className="focus-visible:ring-ring"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <label htmlFor="email" className="font-medium">E‑mail</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="uw.email@voorbeeld.nl"
                                            required
                                            className="focus-visible:ring-ring"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <label htmlFor="message" className="font-medium">Bericht</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Beschrijf uw aanvraag of vraag..."
                                            minLength={12}
                                            required
                                            className="min-h-[140px] focus-visible:ring-ring"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full btn bg-traffic-orange text-white hover:bg-traffic-orange/90 shadow-[0_0_24px_4px_hsl(var(--traffic-orange)/0.25)] hover:shadow-[0_0_32px_8px_hsl(var(--traffic-orange)/0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    >
                                        Verstuur bericht
                                        <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

const InfoRow = ({
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
    const content = (
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 dark:bg-white/10">
                {icon}
            </div>
            <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );

    return href ? (
        <a
            href={href}
            className="block rounded-lg hover:bg-foreground/[0.04] transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
            {content}
        </a>
    ) : (
        <div className="rounded-lg p-2">{content}</div>
    );
};

export default ContactForm;
