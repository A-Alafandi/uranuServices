import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, HardHat } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-traffic-dark to-traffic-dark/90 text-white font-sans">
            <div className="section py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

                    {/* Company Info */}
                    <div className="motion-safe:animate-hero-fade-in">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-traffic-orange shadow-glow transition-transform duration-300 hover:scale-105 motion-safe:animate-hero-float">
                                <HardHat className="w-7 h-7 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-50">Uranu Services</h3>
                                <p className="text-sm text-white/80">Uw partner in verkeersveiligheid</p>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                            Professionele verkeersregeling door heel Nederland — gecertificeerd, betrouwbaar en altijd paraat voor elke situatie.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="motion-safe:animate-hero-fade-in [animation-delay:200ms]">
                        <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-50">Onze diensten</h4>
                        <ul className="space-y-3 text-sm sm:text-base text-white/80">
                            {[
                                "Infra-verkeersregelaars",
                                "Evenementenregeling",
                                "Bouwverkeersregelaars",
                                "Calamiteitenservice",
                                "Parkeerregelaars",
                                "Training & certificering"
                            ].map((service, index) => (
                                <li key={index} className="hover:text-traffic-orange transition-colors duration-300">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="motion-safe:animate-hero-fade-in [animation-delay:400ms]">
                        <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-50">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-traffic-orange" aria-hidden="true" />
                                <div>
                                    <p className="font-medium text-sm sm:text-base">+31 6 17038632</p>
                                    <p className="text-sm text-white/80">24/7 bereikbaar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-traffic-orange" aria-hidden="true" />
                                <div>
                                    <p className="font-medium text-sm sm:text-base">info@uranuservices.nl</p>
                                    <p className="text-sm text-white/80">Snelle reactie</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-traffic-orange" aria-hidden="true" />
                                <div>
                                    <p className="font-medium text-sm sm:text-base">24/7 Service</p>
                                    <p className="text-sm text-white/80">Inclusief weekenden</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="motion-safe:animate-hero-fade-in [animation-delay:600ms]">
                        <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-50">Hulp nodig?</h4>
                        <p className="text-sm sm:text-base text-white/80 mb-4">
                            Heeft u direct een verkeersregelaar nodig of wilt u zelf aan de slag? Neem contact met ons op.
                        </p>
                        <div className="space-y-4">
                            <Button
                                variant="secondary"
                                className="w-full bg-traffic-orange hover:bg-traffic-orange/90 text-white font-bold shadow-glow hover:shadow-elegant transition-all duration-300 min-h-[44px]"
                                aria-label="Vraag een offerte aan"
                            >
                                Vraag offerte aan
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-traffic-orange text-traffic-orange hover:bg-traffic-orange hover:text-white font-bold transition-all duration-300 min-h-[44px]"
                                aria-label="Word verkeersregelaar"
                            >
                                Word verkeersregelaar
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-traffic-orange/20 mt-12 pt-8 motion-safe:animate-hero-fade-in [animation-delay:800ms]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/70 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Uranu Services VKR. Alle rechten voorbehouden.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
