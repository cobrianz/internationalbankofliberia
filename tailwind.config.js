/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* light gray */
        input: 'var(--color-input)', /* pure white */
        ring: 'var(--color-ring)', /* deep forest green */
        background: 'var(--color-background)', /* near-white with green undertone */
        foreground: 'var(--color-foreground)', /* dark green-black */
        primary: {
          DEFAULT: 'var(--color-primary)', /* deep forest green */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* vibrant sage green */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* clear red */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* soft cream */
          foreground: 'var(--color-muted-foreground)', /* neutral gray */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* soft cream */
          foreground: 'var(--color-accent-foreground)', /* dark green-black */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* pure white */
          foreground: 'var(--color-popover-foreground)', /* dark green-black */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* pure white */
          foreground: 'var(--color-card-foreground)', /* dark green-black */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* standard success green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* professional orange */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* clear red */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Source Sans Pro', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 5vw, 2.5rem)',
      },
      animation: {
        'scale-hover': 'scale 200ms ease-out',
        'entrance': 'entrance 300ms ease-out forwards',
        'pulse-subtle': 'pulse-subtle 2s infinite',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        entrance: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'neumorphic': '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
        'neumorphic-inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
        'elevation': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      },
      transitionTimingFunction: {
        'banking': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        'touch': '44px',
      },
      zIndex: {
        'navigation': '1000',
        'mobile-menu': '1001',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}