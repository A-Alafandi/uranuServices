import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background font-sans flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-extrabold text-traffic-blue mb-4">404</h1>
            <h2 className="text-3xl font-bold text-traffic-blue mb-6">Pagina niet gevonden</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Oeps! Het lijkt erop dat deze pagina niet bestaat. Laten we je terugbrengen naar de start.
            </p>
            <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-traffic-orange hover:bg-traffic-orange/90 text-white font-bold shadow-glow hover:shadow-elegant transition-all duration-300"
            >
                <Link to="/">Terug naar Home</Link>
            </Button>
        </div>
    );
};

export default NotFound;