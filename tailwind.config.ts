import type { Config } from 'tailwindcss'
import type { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config'
import animate from 'tailwindcss-animate'


const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx,html}',
        './index.html',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.5rem',
                xl: '3rem',
                '2xl': '4rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        extend: {
            colors: {
                // Core color system
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',

                // Brand colors
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    glow: 'hsl(var(--primary-glow))',
                    muted: 'hsl(var(--primary-muted))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                    muted: 'hsl(var(--accent-muted))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },

                // Semantic colors
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },

                // Popover and card colors
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },

                // Traffic/Police theme
                traffic: {
                    orange: 'hsl(var(--traffic-orange))',
                    red: 'hsl(var(--traffic-red))',
                    blue: 'hsl(var(--traffic-blue))',
                    dark: 'hsl(var(--traffic-dark))',
                    gray: 'hsl(var(--traffic-gray))',
                    black: 'hsl(var(--traffic-black))',
                    silver: 'hsl(var(--traffic-silver))',
                },

                // Sidebar system
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },

            // Enhanced border radius system
            borderRadius: {
                'xs': 'var(--radius-xs)',
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)',
                'lg': 'var(--radius-lg)',
                'xl': 'var(--radius-xl)',
                '2xl': 'var(--radius-2xl)',
                'full': 'var(--radius-full)',
            },

            // Professional spacing system
            spacing: {
                '3xs': 'var(--space-3xs)', // 4px
                '2xs': 'var(--space-2xs)', // 8px
                'xs': 'var(--space-xs)',   // 12px
                'sm': 'var(--space-sm)',   // 16px
                'md': 'var(--space-md)',   // 24px
                'lg': 'var(--space-lg)',   // 32px
                'xl': 'var(--space-xl)',   // 48px
                '2xl': 'var(--space-2xl)', // 64px
                '3xl': 'var(--space-3xl)', // 96px
                '18': '4.5rem', // 72px
                '22': '5.5rem', // 88px
                '26': '6.5rem', // 104px
                '30': '7.5rem', // 120px
            },

            // Enhanced typography
            fontSize: {
                'xs': ['var(--text-xs)', { lineHeight: '1.4' }],
                'sm': ['var(--text-sm)', { lineHeight: '1.5' }],
                'base': ['var(--text-base)', { lineHeight: '1.6' }],
                'lg': ['var(--text-lg)', { lineHeight: '1.6' }],
                'xl': ['var(--text-xl)', { lineHeight: '1.5' }],
                '2xl': ['var(--text-2xl)', { lineHeight: '1.4' }],
                '3xl': ['var(--text-3xl)', { lineHeight: '1.3' }],
                '4xl': ['var(--text-4xl)', { lineHeight: '1.2' }],
                '5xl': ['var(--text-5xl)', { lineHeight: '1.1' }],
                '6xl': ['var(--text-6xl)', { lineHeight: '1' }],
            },

            // Modern font family stack
            fontFamily: {
                sans: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif'
                ],
                mono: [
                    'SF Mono',
                    'Monaco',
                    'Cascadia Code',
                    'Roboto Mono',
                    'Consolas',
                    'Courier New',
                    'monospace'
                ],
                display: [
                    'Inter',
                    'system-ui',
                    'sans-serif'
                ]
            },

            // Enhanced font weights
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
            },

            // Professional gradient backgrounds
            backgroundImage: {
                'traffic-lights': 'linear-gradient(90deg, hsl(var(--traffic-red)), hsl(var(--traffic-yellow)), hsl(var(--traffic-green)))',
                'gradient-hero': 'var(--gradient-hero)',
                'gradient-accent': 'var(--gradient-accent)',
                'gradient-card': 'var(--gradient-card)',
                'gradient-glass': 'var(--gradient-glass)',
                'gradient-mesh': 'var(--gradient-mesh)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            // Enhanced shadow system
            boxShadow: {
                'xs': 'var(--shadow-xs)',
                'sm': 'var(--shadow-sm)',
                'md': 'var(--shadow-md)',
                'lg': 'var(--shadow-lg)',
                'xl': 'var(--shadow-xl)',
                '2xl': 'var(--shadow-2xl)',
                'glow': 'var(--shadow-glow)',
                'glow-accent': 'var(--shadow-glow-accent)',
                'elegant': 'var(--shadow-elegant)',
                'none': 'none',
                'inner': 'inset 0 2px 4px 0 hsl(0 0% 0% / 0.05)',
            },

            // Advanced transition system
            transitionTimingFunction: {
                'bounce': 'var(--transition-bounce)',
                'smooth': 'var(--transition-smooth)',
                'spring': 'var(--transition-spring)',
                'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'emphasized': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                'decelerated': 'cubic-bezier(0, 0, 0.2, 1)',
                'accelerated': 'cubic-bezier(0.4, 0, 1, 1)',
            },

            transitionDuration: {
                '50': '50ms',
                '150': 'var(--transition-fast)',
                '250': 'var(--transition-base)',
                '350': 'var(--transition-smooth)',
                '500': 'var(--transition-spring)',
            },

            // Enhanced animation keyframes
            keyframes: {
                'traffic-line': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '200% 0%' },
                },
                // Accordion animations
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },

                // Modern entrance animations
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(2rem)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-2rem)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'slide-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-2rem)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
                'slide-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(2rem)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
                'scale-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.95)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                },

                // Interactive animations
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-0.5rem)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: 'var(--shadow-glow)' },
                    '50%': { boxShadow: 'var(--shadow-2xl)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },

                // Loading animations
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'ping-slow': {
                    '0%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    },
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '0'
                    },
                },
                'progress-indeterminate': {
                    '0%': { left: '-40%' },
                    '100%': { left: '100%' },
                },

                // Attention-seeking animations
                'bounce-subtle': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    },
                    '50%': {
                        transform: 'translateY(-0.25rem)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                },
                'wiggle': {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'shake': {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-0.25rem)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(0.25rem)' },
                },

                // Modern reveal animations
                'reveal-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(2rem)',
                        clipPath: 'inset(100% 0 0 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                        clipPath: 'inset(0 0 0 0)',
                    },
                },
                'reveal-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-2rem)',
                        clipPath: 'inset(0 100% 0 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                        clipPath: 'inset(0 0 0 0)',
                    },
                },
            },

            // Enhanced animation utilities
            animation: {
                'traffic-line': 'traffic-line 4s linear infinite',
                // Standard animations
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',

                // Entrance animations
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'fade-in-down': 'fade-in-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

                // Interactive animations
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 3s ease-in-out infinite',

                // Loading states
                'spin-slow': 'spin-slow 3s linear infinite',
                'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                'progress': 'progress-indeterminate 1.5s ease-in-out infinite',

                // Attention animations
                'bounce-subtle': 'bounce-subtle 1s infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'shake': 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',

                // Reveal animations
                'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                'reveal-left': 'reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            },

            // Enhanced z-index system
            zIndex: {
                'auto': 'auto',
                '0': '0',
                '10': '10',
                '20': '20',
                '30': '30',
                '40': '40',
                '50': '50',
                'dropdown': 'var(--z-dropdown)',
                'sticky': 'var(--z-sticky)',
                'fixed': 'var(--z-fixed)',
                'modal-backdrop': 'var(--z-modal-backdrop)',
                'modal': 'var(--z-modal)',
                'popover': 'var(--z-popover)',
                'tooltip': 'var(--z-tooltip)',
                'toast': 'var(--z-toast)',
            },

            // Advanced backdrop blur
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '12px',
                'lg': '16px',
                'xl': '24px',
                '2xl': '40px',
                '3xl': '64px',
            },

            // Enhanced opacity scale
            opacity: {
                '0': '0',
                '2': '0.02',
                '5': '0.05',
                '10': '0.1',
                '15': '0.15',
                '20': '0.2',
                '25': '0.25',
                '30': '0.3',
                '35': '0.35',
                '40': '0.4',
                '45': '0.45',
                '50': '0.5',
                '55': '0.55',
                '60': '0.6',
                '65': '0.65',
                '70': '0.7',
                '75': '0.75',
                '80': '0.8',
                '85': '0.85',
                '90': '0.9',
                '95': '0.95',
                '100': '1',
            },

            // Professional grid system
            gridTemplateColumns: {
                'auto-fit-xs': 'repeat(auto-fit, minmax(200px, 1fr))',
                'auto-fit-sm': 'repeat(auto-fit, minmax(250px, 1fr))',
                'auto-fit-md': 'repeat(auto-fit, minmax(300px, 1fr))',
                'auto-fit-lg': 'repeat(auto-fit, minmax(350px, 1fr))',
                'auto-fit-xl': 'repeat(auto-fit, minmax(400px, 1fr))',
                'auto-fill-xs': 'repeat(auto-fill, minmax(200px, 1fr))',
                'auto-fill-sm': 'repeat(auto-fill, minmax(250px, 1fr))',
                'auto-fill-md': 'repeat(auto-fill, minmax(300px, 1fr))',
                'auto-fill-lg': 'repeat(auto-fill, minmax(350px, 1fr))',
                'auto-fill-xl': 'repeat(auto-fill, minmax(400px, 1fr))',
            },

            // Enhanced aspect ratios
            aspectRatio: {
                'auto': 'auto',
                'square': '1 / 1',
                'video': '16 / 9',
                'cinema': '21 / 9',
                'photo': '4 / 3',
                'portrait': '3 / 4',
                'golden': '1.618 / 1',
                'a4': '210 / 297',
            },

            // Advanced cursor options
            cursor: {
                'auto': 'auto',
                'default': 'default',
                'pointer': 'pointer',
                'wait': 'wait',
                'text': 'text',
                'move': 'move',
                'help': 'help',
                'not-allowed': 'not-allowed',
                'none': 'none',
                'context-menu': 'context-menu',
                'progress': 'progress',
                'cell': 'cell',
                'crosshair': 'crosshair',
                'vertical-text': 'vertical-text',
                'alias': 'alias',
                'copy': 'copy',
                'no-drop': 'no-drop',
                'grab': 'grab',
                'grabbing': 'grabbing',
                'all-scroll': 'all-scroll',
                'col-resize': 'col-resize',
                'row-resize': 'row-resize',
                'n-resize': 'n-resize',
                'e-resize': 'e-resize',
                's-resize': 's-resize',
                'w-resize': 'w-resize',
                'ne-resize': 'ne-resize',
                'nw-resize': 'nw-resize',
                'se-resize': 'se-resize',
                'sw-resize': 'sw-resize',
                'ew-resize': 'ew-resize',
                'ns-resize': 'ns-resize',
                'nesw-resize': 'nesw-resize',
                'nwse-resize': 'nwse-resize',
                'zoom-in': 'zoom-in',
                'zoom-out': 'zoom-out',
            },

            // Modern filter effects
            blur: {
                'xs': '2px',
                'sm': '4px',
                'md': '8px',
                'lg': '16px',
                'xl': '24px',
                '2xl': '40px',
                '3xl': '64px',
            },

            // Professional line height system
            lineHeight: {
                'none': '1',
                'tight': '1.25',
                'snug': '1.375',
                'normal': '1.5',
                'relaxed': '1.625',
                'loose': '2',
                '3': '.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '7': '1.75rem',
                '8': '2rem',
                '9': '2.25rem',
                '10': '2.5rem',
            },

            // Enhanced letter spacing
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0em',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },
        },
    },
    plugins: [
        animate,

        function({ addUtilities, theme }: PluginAPI) {
            const newUtilities: CSSRuleObject = {
                // Gradient text utilities
                '.text-gradient-primary': {
                    background: `linear-gradient(135deg, ${String(theme('colors.primary.DEFAULT'))}, ${String(theme('colors.accent.DEFAULT'))})`,
                    '-webkit-background-clip': 'text',
                    'background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-size': '200% 200%',
                },

                // Glass morphism utilities
                '.glass': {
                    background: 'var(--gradient-glass)',
                    'backdrop-filter': 'blur(24px) saturate(180%)',
                    border: `1px solid hsl(var(--border) / 0.2)`,
                },

                '.glass-card': {
                    background: 'var(--gradient-glass)',
                    'backdrop-filter': 'blur(24px) saturate(180%)',
                    border: `1px solid hsl(var(--border) / 0.2)`,
                    'border-radius': String(theme('borderRadius.xl')),
                    'box-shadow': String(theme('boxShadow.xl')),
                },

                // Advanced shadow utilities
                '.shadow-glow': {
                    'box-shadow': 'var(--shadow-glow)',
                },

                '.shadow-glow-accent': {
                    'box-shadow': 'var(--shadow-glow-accent)',
                },

                '.shadow-elegant': {
                    'box-shadow': 'var(--shadow-elegant)',
                },

                // Border gradient utilities
                '.border-gradient': {
                    border: '2px solid transparent',
                    background: `linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box,
                                linear-gradient(135deg, ${String(theme('colors.primary.DEFAULT'))}, ${String(theme('colors.accent.DEFAULT'))}) border-box`,
                },

                // Performance utilities
                '.gpu-accelerate': {
                    transform: 'translateZ(0)',
                    'backface-visibility': 'hidden',
                    perspective: '1000px',
                },

                // Accessibility utilities
                '.focus-ring': {
                    '&:focus-visible': {
                        outline: `2px solid ${String(theme('colors.ring'))}`,
                        'outline-offset': '2px',
                        'border-radius': String(theme('borderRadius.xs')),
                    },
                },

                // Typography utilities
                '.text-balance': {
                    'text-wrap': 'balance',
                },

                '.text-pretty': {
                    'text-wrap': 'pretty',
                },

                // Container queries support
                '.container-xs': { 'container-type': 'inline-size' },
                '.container-sm': { 'container-type': 'inline-size' },
                '.container-md': { 'container-type': 'inline-size' },
                '.container-lg': { 'container-type': 'inline-size' },
                '.container-xl': { 'container-type': 'inline-size' },

                // Modern scrollbar
                '.scrollbar-thin': {
                    'scrollbar-width': 'thin',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: String(theme('colors.muted.DEFAULT')),
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: `${String(theme('colors.muted.foreground'))} / 0.3`,
                        'border-radius': String(theme('borderRadius.full')),
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: `${String(theme('colors.muted.foreground'))} / 0.5`,
                    },
                },

                // Skeleton loading
                '.skeleton': {
                    background: String(theme('colors.muted.DEFAULT')),
                    'border-radius': String(theme('borderRadius.md')),
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                },

                // Interactive states
                '.interactive': {
                    transition: 'all 0.2s ease-out',
                    cursor: 'pointer',

                    '&:hover': {
                        transform: 'translateY(-2px)',
                        'box-shadow': String(theme('boxShadow.lg')),
                    },

                    '&:active': {
                        transform: 'translateY(0) scale(0.98)',
                    },
                },

                // Safe area support for mobile
                '.safe-top': {
                    'padding-top': 'env(safe-area-inset-top)',
                },
                '.safe-bottom': {
                    'padding-bottom': 'env(safe-area-inset-bottom)',
                },
                '.safe-left': {
                    'padding-left': 'env(safe-area-inset-left)',
                },
                '.safe-right': {
                    'padding-right': 'env(safe-area-inset-right)',
                },
            }

            addUtilities(newUtilities)
        },
    ],
}

export default config