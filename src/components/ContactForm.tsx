import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Mail, Send, User } from "lucide-react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [ageError, setAgeError] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    function calculateAge(dateString: string) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevent default form submission
        setAgeError("");
        const formData = new FormData(e.currentTarget);
        const dob = formData.get("dateOfBirth") as string;
        if (!dob || calculateAge(dob) < 18) {
            setAgeError("Je moet minimaal 18 jaar oud zijn om dit formulier te verzenden.");
            return false;
        }
        // Simulate form submission (replace with actual API call in production)
        setTimeout(() => setSubmitted(true), 1000);
        return true;
    }

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-traffic-blue/10 to-background font-sans">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up [animation-delay:100ms]">
                        <h2 className="text-5xl font-extrabold text-traffic-blue mb-6 tracking-tight">
                            Neem contact op
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Heeft u vragen of wilt u een offerte aanvragen? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-10 animate-slide-in-left [animation-delay:200ms]">
                            <Card className="border-0 shadow-elegant bg-gradient-to-br from-white to-traffic-blue/5 hover:shadow-glow transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-4 text-2xl text-traffic-blue">
                                        <div className="w-12 h-12 bg-traffic-blue rounded-xl flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                                        </div>
                                        Direct contact
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="group hover:bg-traffic-blue/10 p-4 rounded-xl transition-all duration-300">
                                        <h4 className="font-semibold text-foreground mb-2">Telefoon</h4>
                                        <p className="text-muted-foreground group-hover:text-traffic-blue transition-colors duration-300">
                                            <a href="tel:+31617038632" className="hover:underline">+31 6 17038632</a>
                                        </p>
                                    </div>
                                    <div className="group hover:bg-traffic-blue/10 p-4 rounded-xl transition-all duration-300">
                                        <h4 className="font-semibold text-foreground mb-2">Email</h4>
                                        <p className="text-muted-foreground group-hover:text-traffic-blue transition-colors duration-300">
                                            <a href="mailto:info@uranuservices.nl" className="hover:underline">info@uranuservices.nl</a>
                                        </p>
                                    </div>
                                    <div className="group hover:bg-traffic-blue/10 p-4 rounded-xl transition-all duration-300">
                                        <h4 className="font-semibold text-foreground mb-2">Bereikbaarheid</h4>
                                        <p className="text-muted-foreground group-hover:text-traffic-blue transition-colors duration-300">24/7, inclusief weekenden</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-elegant bg-gradient-to-br from-traffic-orange to-traffic-orange/80 text-white hover:scale-105 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl animate-float">Waarom kiezen voor Uranu Services?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-white/90">
                                        <li className="flex items-center gap-3 hover:translate-x-3 transition-transform duration-300">
                                            <span className="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                            Gecertificeerde verkeersregelaars
                                        </li>
                                        <li className="flex items-center gap-3 hover:translate-x-3 transition-transform duration-300">
                                            <span className="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                            24/7 bereikbaar voor noodgevallen
                                        </li>
                                        <li className="flex items-center gap-3 hover:translate-x-3 transition-transform duration-300">
                                            <span className="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                            Maatwerk oplossingen
                                        </li>
                                        <li className="flex items-center gap-3 hover:translate-x-3 transition-transform duration-300">
                                            <span className="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                            Vaste aanspreekpunt
                                        </li>
                                        <li className="flex items-center gap-3 hover:translate-x-3 transition-transform duration-300">
                                            <span className="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                            Reserveteam stand-by
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        {/* Contact Form */}
                        <Card className="border-0 shadow-elegant bg-gradient-to-br from-white to-traffic-blue/5 hover:shadow-glow transition-all duration-500 animate-slide-in-right [animation-delay:300ms]">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-4 text-2xl text-traffic-blue">
                                    <div className="w-12 h-12 bg-traffic-orange rounded-xl flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                                        <Send className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    Stuur ons een bericht
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {submitted ? (
                                    <div className="text-center py-12 animate-scale-in">
                                        <h3 className="text-3xl font-bold text-traffic-blue mb-4">Bedankt!</h3>
                                        <p className="text-lg text-muted-foreground">Uw bericht is succesvol verzonden. We nemen zo snel mogelijk contact op.</p>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="mt-6 bg-transparent border-traffic-blue text-traffic-blue hover:bg-traffic-blue hover:text-white font-bold transition-all duration-300"
                                            onClick={() => setSubmitted(false)}
                                        >
                                            Nieuw bericht
                                        </Button>
                                    </div>
                                ) : (
                                    <form
                                        ref={formRef}
                                        action="https://submitform.com/your-endpoint"
                                        method="POST"
                                        className="space-y-8"
                                        autoComplete="off"
                                        onSubmit={handleSubmit}
                                        aria-describedby={ageError ? "form-error" : undefined}
                                    >
                                        <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                                        <input type="hidden" name="_honeypot" value="on" />
                                        <input type="hidden" name="_subject" value="Nieuw contactformulier van Uranu Services" />
                                        <div>
                                            <label htmlFor="name" className="flex items-center gap-2 font-semibold mb-2 text-traffic-blue">
                                                <User className="w-5 h-5" aria-hidden="true" />
                                                Naam
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                required
                                                minLength={2}
                                                placeholder="Uw volledige naam"
                                                autoComplete="off"
                                                className="border-traffic-blue/30 focus:ring-traffic-blue focus:border-traffic-blue transition-all duration-300"
                                                aria-required="true"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="flex items-center gap-2 font-semibold mb-2 text-traffic-blue">
                                                <Mail className="w-5 h-5" aria-hidden="true" />
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="uw.email@voorbeeld.nl"
                                                autoComplete="off"
                                                className="border-traffic-blue/30 focus:ring-traffic-blue focus:border-traffic-blue transition-all duration-300"
                                                aria-required="true"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="dateOfBirth" className="flex items-center gap-2 font-semibold mb-2 text-traffic-blue">
                                                <CalendarDays className="w-5 h-5" aria-hidden="true" />
                                                Geboortedatum
                                            </label>
                                            <Input
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                type="date"
                                                required
                                                className="border-traffic-blue/30 focus:ring-traffic-blue focus:border-traffic-blue transition-all duration-300"
                                                aria-required="true"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="font-semibold mb-2 text-traffic-blue">
                                                Bericht
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                minLength={10}
                                                placeholder="Beschrijf uw verzoek in detail..."
                                                className="min-h-[140px] border-traffic-blue/30 focus:ring-traffic-blue focus:border-traffic-blue transition-all duration-300"
                                                aria-required="true"
                                            />
                                        </div>
                                        {ageError && (
                                            <div id="form-error" className="text-traffic-red text-center font-semibold animate-fade-in">
                                                {ageError}
                                            </div>
                                        )}
                                        <Button
                                            type="submit"
                                            variant="secondary"
                                            size="lg"
                                            className="w-full bg-traffic-orange hover:bg-traffic-orange/90 text-white font-bold shadow-glow hover:shadow-elegant transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-traffic-blue"
                                            aria-label="Verstuur contactformulier"
                                        >
                                            Verstuur bericht
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;