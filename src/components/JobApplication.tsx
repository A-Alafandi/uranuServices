import { useState, useRef, type FormEvent } from "react";
import type React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, FileText, MapPin, HardHat } from "lucide-react";
import HeroImage from "@/assets/img/HeroImage.webp";

// --- HERO (same visual language as homepage) ---
const PageHero = () => (
    <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
        aria-label="Vacatures bij Uranu Services"
    >
        <div className="absolute inset-0 bg-traffic-dark/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-traffic-dark/20 to-traffic-dark/70" aria-hidden="true" />

        <div className="relative z-10 container text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg motion-safe:animate-fade-in-up">
                Werken bij Uranu Services
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed motion-safe:animate-fade-in [animation-delay:200ms]">
                Word verkeersregelaar en draag direct bij aan veiligheid en doorstroming. Wij bieden goede voorwaarden, opleiding en groei.
            </p>
        </div>
    </section>
);

// --- JOB APPLICATION PAGE ---
const JobApplication = () => {
    const [submitted, setSubmitted] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (formData: FormData) => {
        const next: Record<string, string> = {};
        const name = (formData.get("name") as string) || "";
        const email = (formData.get("email") as string) || "";
        const phone = (formData.get("phone") as string) || "";
        const location = (formData.get("location") as string) || "";
        const experience = (formData.get("experience") as string) || "";
        const motivation = (formData.get("motivation") as string) || "";

        if (name.trim().length < 2) next.name = "Vul uw volledige naam in (minimaal 2 tekens).";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Vul een geldig e-mailadres in.";
        if (!/^\+?\d{8,}$/.test(phone.replace(/\s/g, ""))) next.phone = "Vul een geldig telefoonnummer in.";
        if (location.trim().length < 2) next.location = "Vul uw woonplaats in.";
        if (experience.trim().length < 20) next.experience = "Beschrijf uw ervaring (minimaal 20 tekens).";
        if (motivation.trim().length < 20) next.motivation = "Beschrijf uw motivatie (minimaal 20 tekens).";
        if (!file) next.file = "Upload uw CV als PDF (max. 5MB).";
        else if (file.type !== "application/pdf") next.file = "Alleen PDF-bestanden zijn toegestaan.";
        else if (file.size > 5 * 1024 * 1024) next.file = "Bestand is te groot (max. 5MB).";

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!f) return;
        if (f.type !== "application/pdf") {
            setErrors((p) => ({ ...p, file: "Alleen PDF-bestanden zijn toegestaan." }));
            if (fileInputRef.current) fileInputRef.current.value = "";
            setFile(null);
            setFileName("");
            return;
        }
        if (f.size > 5 * 1024 * 1024) {
            setErrors((p) => ({ ...p, file: "Bestand is te groot (max. 5MB)." }));
            if (fileInputRef.current) fileInputRef.current.value = "";
            setFile(null);
            setFileName("");
            return;
        }
        setErrors((p) => ({ ...p, file: "" }));
        setFile(f);
        setFileName(f.name);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        if (!validateForm(fd)) return;
        // TODO: vervang met echte API call
        setTimeout(() => setSubmitted(true), 800);
    };

    return (
        <>
            {/* Global header for navigation back to home */}
            <Header />

            <PageHero />

            {/* Breadcrumbs under hero */}
            <section id="vacatures" className="py-16 sm:py-24 bg-background font-sans">
                <div className="container">
                    <div className="text-center mb-10 motion-safe:animate-fade-in-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            Solliciteer als verkeersregelaar
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
                            Vul het onderstaande formulier in. We nemen snel contact met u op voor de vervolgstappen.
                        </p>
                    </div>

                    <Card className="glass-card border border-border/60 shadow-elegant motion-safe:animate-fade-in">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                                <div className="w-11 h-11 rounded-xl bg-traffic-orange flex items-center justify-center shadow-glow">
                                    <HardHat className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                Sollicitatieformulier
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {submitted ? (
                                <div className="text-center py-10">
                                    <h3 className="text-2xl font-bold">Bedankt voor uw sollicitatie!</h3>
                                    <p className="text-muted-foreground mt-2">
                                        We hebben uw gegevens ontvangen en nemen zo spoedig mogelijk contact met u op.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-6"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFile(null);
                                            setFileName("");
                                            if (fileInputRef.current) fileInputRef.current.value = "";
                                            setErrors({});
                                        }}
                                    >
                                        Nieuwe sollicitatie
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid gap-6">
                                    {errors.submit && <p className="text-red-600 text-sm">{errors.submit}</p>}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Field
                                            id="name"
                                            name="name"
                                            label="Volledige naam"
                                            icon={<User className="w-5 h-5" aria-hidden="true" />}
                                            placeholder="Uw volledige naam"
                                            error={errors.name}
                                        />
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="E-mailadres"
                                            icon={<Mail className="w-5 h-5" aria-hidden="true" />}
                                            placeholder="uw.email@voorbeeld.nl"
                                            error={errors.email}
                                        />
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            label="Telefoonnummer"
                                            icon={<Phone className="w-5 h-5" aria-hidden="true" />}
                                            placeholder="+31 6 12345678"
                                            error={errors.phone}
                                        />
                                        <Field
                                            id="location"
                                            name="location"
                                            label="Woonplaats"
                                            icon={<MapPin className="w-5 h-5" aria-hidden="true" />}
                                            placeholder="Uw woonplaats"
                                            error={errors.location}
                                        />
                                    </div>

                                    <TextField
                                        id="experience"
                                        name="experience"
                                        label="Werkervaring"
                                        placeholder="Beschrijf uw relevante werkervaring..."
                                        error={errors.experience}
                                    />
                                    <TextField
                                        id="motivation"
                                        name="motivation"
                                        label="Motivatie"
                                        placeholder="Waarom wilt u bij Uranu Services werken?"
                                        error={errors.motivation}
                                    />

                                    <div>
                                        <label className="flex items-center gap-2 font-medium mb-2">
                                            <FileText className="w-5 h-5" aria-hidden="true" />
                                            CV uploaden (PDF, max. 5MB)
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <label className="cursor-pointer">
                                                <div className="px-4 py-2 rounded-lg border border-border hover:bg-foreground/[0.04] transition-colors">
                                                    Kies bestand
                                                </div>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept=".pdf"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    required
                                                />
                                            </label>
                                            <span className="text-sm text-muted-foreground">
                        {fileName || "Geen bestand geselecteerd"}
                      </span>
                                        </div>
                                        {errors.file && <p className="text-red-600 text-sm mt-1">{errors.file}</p>}
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full btn bg-traffic-orange text-white hover:bg-traffic-orange/90 shadow-[0_0_24px_4px_hsl(var(--traffic-orange)/0.25)] hover:shadow-[0_0_32px_8px_hsl(var(--traffic-orange)/0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    >
                                        Sollicitatie versturen
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
};

const Field = ({
                   id,
                   name,
                   label,
                   icon,
                   type = "text",
                   placeholder,
                   error,
               }: {
    id: string;
    name: string;
    label: string;
    icon: React.ReactNode;
    type?: string;
    placeholder?: string;
    error?: string;
}) => (
    <div>
        <label htmlFor={id} className="flex items-center gap-2 font-medium mb-2">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
        {icon}
      </span>
            {label}
        </label>
        <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            required
            className={`focus-visible:ring-ring ${error ? "border-red-500" : ""}`}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
            <p id={`${id}-error`} className="text-red-600 text-sm mt-1">
                {error}
            </p>
        )}
    </div>
);

const TextField = ({
                       id,
                       name,
                       label,
                       placeholder,
                       error,
                   }: {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    error?: string;
}) => (
    <div>
        <label htmlFor={id} className="font-medium mb-2 block">
            {label}
        </label>
        <Textarea
            id={id}
            name={name}
            placeholder={placeholder}
            required
            className={`min-h-[120px] focus-visible:ring-ring ${error ? "border-red-500" : ""}`}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
            <p id={`${id}-error`} className="text-red-600 text-sm mt-1">
                {error}
            </p>
        )}
    </div>
);

export default JobApplication;
