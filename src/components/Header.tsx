import { useState } from "react";
import { Menu, X, TrafficCone } from "lucide-react";

const NAV_LINKS = [
    { label: "Vacatures", href: "#vacatures" },
    { label: "Opleiding", href: "#opleiding" },
    { label: "Diensten", href: "#diensten" },
    { label: "Over ons", href: "#over-ons" },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-traffic-blue/95 shadow-elegant backdrop-blur-lg transition-all duration-300 font-sans">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-0">
                {/* Brand */}
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-traffic-orange shadow-glow transition-transform duration-300 group-hover:scale-105 animate-float">
                        <TrafficCone className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-bold text-2xl text-traffic-blue tracking-wide group-hover:text-traffic-orange transition-colors duration-300">
            Uranu Services
          </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 ml-10">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-traffic-blue hover:text-traffic-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-traffic-orange"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-6 px-6 py-2 rounded-xl bg-traffic-orange text-white font-bold shadow-glow hover:bg-traffic-orange/90 hover:shadow-elegant transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-traffic-blue"
                    >
                        Vraag offerte aan
                    </a>
                </nav>

                {/* Mobile Burger */}
                <button
                    className="md:hidden p-2 rounded-xl hover:bg-traffic-blue/10 transition"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Menu sluiten" : "Menu openen"}
                >
                    {open ? (
                        <X className="w-8 h-8 text-traffic-blue" />
                    ) : (
                        <Menu className="w-8 h-8 text-traffic-blue" />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <nav className="absolute top-full left-0 w-full bg-white dark:bg-traffic-blue/95 border-t border-traffic-blue/20 shadow-elegant md:hidden animate-fade-in-up">
                    <div className="flex flex-col items-center py-6 gap-6">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-traffic-blue hover:text-traffic-orange transition focus:outline-none focus:ring-2 focus:ring-traffic-orange"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-4 px-6 py-2 rounded-xl bg-traffic-orange text-white font-bold shadow-glow hover:bg-traffic-orange/90 transition focus:outline-none focus:ring-2 focus:ring-traffic-blue"
                            onClick={() => setOpen(false)}
                        >
                            Vraag offerte aan
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
