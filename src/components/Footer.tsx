import { Button } from "@/components/ui/button";
import {Phone, Mail, Clock, HardHat} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-traffic-blue to-traffic-blue/90 text-white font-sans">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-traffic-orange shadow-glow transition-transform duration-300 group-hover:scale-105 animate-float">
                                <HardHat className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Uranu Services VKR</h3>
                                <p className="text-sm text-white/80">Uw partner in verkeersveiligheid</p>
                            </div>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                            Professionele verkeersregeling door heel Nederland. Gecertificeerd, betrouwbaar en altijd paraat.
                        </p>
                    </div>
                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Onze diensten</h4>
                        <ul className="space-y-3 text-white/80">
                            <li className="hover:text-traffic-orange transition-colors duration-300">Infra verkeersregelaars</li>
                            <li className="hover:text-traffic-orange transition-colors duration-300">Evenementen regeling</li>
                            <li className="hover:text-traffic-orange transition-colors duration-300">Bouw verkeersregelaars</li>
                            <li className="hover:text-traffic-orange transition-colors duration-300">Calamiteiten service</li>
                            <li className="hover:text-traffic-orange transition-colors duration-300">Parkeerregelaars</li>
                            <li className="hover:text-traffic-orange transition-colors duration-300">Training & certificering</li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-traffic-orange" />
                                <div>
                                    <p className="font-medium">+31 6 17038632</p>
                                    <p className="text-sm text-white/80">24/7 bereikbaar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-traffic-orange" />
                                <div>
                                    <p className="font-medium">info@uranuservices.nl</p>
                                    <p className="text-sm text-white/80">Snelle reactie</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-traffic-orange" />
                                <div>
                                    <p className="font-medium">24/7 Service</p>
                                    <p className="text-sm text-white/80">Ook weekenden</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CTA */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Hulp nodig?</h4>
                        <p className="text-white/80 mb-4">
                            Heeft u een verkeersregelaar nodig of wilt u er zelf een worden?
                        </p>
                        <div className="space-y-4">
                            <Button variant="secondary" className="w-full bg-traffic-orange hover:bg-traffic-orange/90 text-white font-bold shadow-glow hover:shadow-elegant transition-all duration-300">
                                Vraag offerte aan
                            </Button>
                            <Button variant="outline" className="w-full bg-transparent border-traffic-orange text-traffic-orange hover:bg-traffic-orange hover:text-white font-bold transition-all duration-300">
                                Word verkeersregelaar
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/30 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/70 text-sm">
                            © 2024 Uranu Services VKR. Alle rechten voorbehouden.
                        </p>
                        <div className="flex gap-6 text-sm text-white/70">
                            <a href="#" className="hover:text-traffic-orange transition">Privacy</a>
                            <a href="#" className="hover:text-traffic-orange transition">Voorwaarden</a>
                            <a href="#" className="hover:text-traffic-orange transition">Certificering</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;