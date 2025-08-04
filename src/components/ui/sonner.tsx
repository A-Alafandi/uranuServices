import { Toaster as SonnerToaster } from 'sonner';

export const Toaster = () => {
    return (
        <SonnerToaster
            position="top-right"
            toastOptions={{
                classNames: {
                    toast: 'bg-background text-foreground border-traffic-blue/30 shadow-elegant',
                    success: 'bg-accent text-accent-foreground',
                    error: 'bg-traffic-red text-white',
                    warning: 'bg-traffic-orange text-white',
                    info: 'bg-traffic-blue text-white',
                },
            }}
        />
    );
};