import React, { useState, useEffect } from "react";
import { Menu, X, HardHat, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

type NavItem = { label: string; to?: string; hash?: string };

// Added an explicit "Home" entry at the top
const NAV: NavItem[] = [
    { label: "Home", to: "/" },
    { label: "Over ons", hash: "over-ons" },
    { label: "Diensten", hash: "diensten" },
    { label: "Contact", hash: "contact" },
    { label: "Vacatures", to: "/Vacatures" },
    { label: "Opleiding", to: "/opleiding" },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            const dark = saved === "dark";
            setIsDark(dark);
            document.documentElement.classList.toggle("dark", dark);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    const linkClass =
        `transition-colors duration-300 text-sm md:text-base font-medium ` +
        (scrolled ? "text-foreground hover:text-primary" : "text-white/85 hover:text-white");

    const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        if (location.pathname === "/") {
            e.preventDefault();
            const target = document.querySelector<HTMLElement>(`#${hash}`);
            target?.scrollIntoView({ behavior: "smooth" });
            setMobileOpen(false);
        }
    };

    const anchorHref = (hash: string) => (location.pathname === "/" ? `#${hash}` : `/#${hash}`);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
                    : "bg-traffic-dark/80 backdrop-blur-md border-b border-white/10"
            }`}
        >
            <div className="container py-3">
                <div className="flex items-center justify-between">
                    {/* Logo links to home */}
                    <Link to="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-traffic-orange shadow-[0_0_24px_4px_hsl(var(--traffic-orange)/0.25)]">
                            <HardHat className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-xl md:text-2xl font-extrabold ${scrolled ? "text-foreground" : "text-white"}`}>
              Uranu Services
            </span>
                    </Link>

                    {/* Desktop nav with explicit Home item */}
                    <nav className="hidden md:flex items-center gap-6">
                        {NAV.map((item) =>
                            item.to ? (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className={linkClass}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={anchorHref(item.hash!)}
                                    onClick={(e) => onAnchorClick(e, item.hash!)}
                                    className={linkClass}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                        <Button
                            size="sm"
                            className="ml-2 bg-traffic-orange text-white hover:bg-traffic-orange/90 min-w-[120px] shadow-[0_0_24px_4px_hsl(var(--traffic-orange)/0.25)]"
                            asChild
                        >
                            <a href={anchorHref("contact")} onClick={(e) => onAnchorClick(e, "contact")}>Offerte Aanvragen</a>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Schakel naar licht thema" : "Schakel naar donker thema"}
                            className={scrolled ? "text-foreground" : "text-white"}
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </Button>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        className={`md:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Menu openen/sluiten"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile nav includes explicit Home too */}
                {mobileOpen && (
                    <nav id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
                        {NAV.map((item) =>
                            item.to ? (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className={`${linkClass} block py-2`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={anchorHref(item.hash!)}
                                    onClick={(e) => onAnchorClick(e, item.hash!)}
                                    className={`${linkClass} block py-2`}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                        <Button className="w-full mt-2 bg-traffic-orange text-white hover:bg-traffic-orange/90" asChild>
                            <a href={anchorHref("contact")} onClick={(e) => onAnchorClick(e, "contact")}>Offerte aanvragen</a>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Schakel naar licht thema" : "Schakel naar donker thema"}
                            className={`w-full flex justify-center ${scrolled ? "text-foreground" : "text-white"}`}
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
