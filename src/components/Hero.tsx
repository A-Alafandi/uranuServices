import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import HeroImage from "../../public/assets/img/HeroImage.jpg"; // Replace with your actual image path
const Hero = () => {
    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('../../public/assets/img/HeroImage.jpg')`, // Replace with your background image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlays for contrast */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg mb-8 animate-fade-in-up">
                    Verkeersveiligheid<br />
                    <span className="text-primary-glow animate-float block">begint bij ons</span>
                </h1>
                <p className="text-lg md:text-2xl text-white/90 max-w-2xl text-center mx-auto mb-10 leading-relaxed animate-fade-in [animation-delay:200ms]">
                    Ervaren en gecertificeerde verkeersregelaars van Uranu Services,
                    uw partners in veilig en efficiënt verkeersbeheer door heel Nederland.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in [animation-delay:400ms]">
                    <Button
                        variant="secondary"
                        size="xl"
                        className="shadow-[0_0_24px_4px_rgba(0,198,174,0.25)] hover:shadow-[0_0_32px_8px_rgba(0,198,174,0.5)] transition-all duration-300 hover:scale-105"
                    >
                        Ik zoek verkeersregelaars
                    </Button>
                    <Button
                        variant="accent"
                        size="xl"
                        className="shadow-[0_0_24px_4px_rgba(0,198,174,0.25)] hover:shadow-[0_0_32px_8px_rgba(0,198,174,0.5)] transition-all duration-300 hover:scale-105"
                    >
                        Vraag Offerte
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/85 animate-slide-in-left [animation-delay:600ms]">
                    <ContactCard
                        icon={<Phone className="w-7 h-7 text-white" />}
                        label="Bel direct"
                        value="+31 6 17038632"
                    />
                    <ContactCard
                        icon={<Mail className="w-7 h-7 text-white" />}
                        label="Email ons"
                        value="info@uranuservices.nl"
                    />
                </div>
            </div>
            {/* Subtle parallax decoration (optional): */}
            <div className="absolute left-0 bottom-0 w-full h-40 pointer-events-none overflow-hidden z-0">
                <div className="w-1/3 h-40 bg-primary-glow blur-2xl opacity-30 animate-parallax"></div>
            </div>
            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-32px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
        }
        @keyframes parallax {
          0% { transform: translateX(0);}
          100% { transform: translateX(100vw);}
        }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.65,.05,.36,1) both; }
        .animate-fade-in { animation: fade-in 1.2s both; }
        .animate-slide-in-left { animation: slide-in-left 1.2s both; }
        .animate-float { animation: float 3.2s ease-in-out infinite; }
        .animate-parallax { animation: parallax 12s linear infinite; }
      `}</style>
        </section>
    );
};

const ContactCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
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

export default Hero;
