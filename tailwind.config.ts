import type { Config } from "tailwindcss";
import * as animate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    glow: 'hsl(var(--primary-glow))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                // Updated traffic colors
                'traffic-orange': '#F97316', // Vibrant orange for high visibility
                'traffic-blue': '#1E3A8A',  // Deep blue for trust and authority
                'traffic-red': '#DC2626',    // Bright red for alerts and urgency
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, hsl(var(--traffic-blue)) 0%, hsl(var(--traffic-blue)/0.8) 100%)',
                'gradient-accent': 'linear-gradient(135deg, hsl(var(--traffic-orange)) 0%, hsl(var(--traffic-orange)/0.8) 100%)',
                'gradient-card': 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--traffic-blue)/0.1) 100%)'
            },
            boxShadow: {
                'elegant': '0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 6px 24px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 15px rgba(249, 115, 22, 0.5)' // Matches traffic-orange
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            },
            borderRadius: {
                lg: '12px',
                md: '8px',
                sm: '4px'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'scale-in': {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.3s ease-out',
                'accordion-up': 'accordion-up 0.3s ease-out',
                'fade-in': 'fade-in 0.7s ease-out',
                'fade-in-up': 'fade-in-up 0.9s ease-out',
                'slide-in-left': 'slide-in-left 0.7s ease-out',
                'slide-in-right': 'slide-in-right 0.7s ease-out',
                'scale-in': 'scale-in 0.5s ease-out',
                'float': 'float 2.5s ease-in-out infinite'
            }
        }
    },
    plugins: [animate],
} satisfies Config;