/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'ring-primary-500',
    'border-primary-500',
    'bg-primary-500',
    'text-primary-500',
    'hover:bg-primary-600',
    'focus:ring-primary-500',
    'hover:text-primary-700',
    'hover:bg-primary-50',
    'bg-primary-100',
    'hover:bg-primary-200',
    'from-primary-500',
    'to-primary-700',
    'bg-primary-50'
  ],
  theme: {
    extend: {
      // TEMPLATE CUSTOMIZATION
      // ======================
      // Sie können die Hauptfarben Ihres Themes hier anpassen
      colors: {
        // Primärfarbe (dynamisch aus CSS-Variablen)
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'hsl(from var(--color-primary) h s 97%)',
          100: 'hsl(from var(--color-primary) h s 90%)',
          200: 'hsl(from var(--color-primary) h s 80%)',
          300: 'hsl(from var(--color-primary) h s 70%)',
          400: 'hsl(from var(--color-primary) h s 60%)',
          500: 'var(--color-primary)',
          600: 'hsl(from var(--color-primary) h s 40%)',
          700: 'hsl(from var(--color-primary) h s 30%)',
          800: 'hsl(from var(--color-primary) h s 20%)',
          900: 'hsl(from var(--color-primary) h s 10%)',
          950: 'hsl(from var(--color-primary) h s 5%)',
        },
        // Sekundärfarbe (dynamisch aus CSS-Variablen)
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: 'hsl(from var(--color-secondary) h s 97%)',
          100: 'hsl(from var(--color-secondary) h s 90%)',
          200: 'hsl(from var(--color-secondary) h s 80%)',
          300: 'hsl(from var(--color-secondary) h s 70%)',
          400: 'hsl(from var(--color-secondary) h s 60%)',
          500: 'var(--color-secondary)',
          600: 'hsl(from var(--color-secondary) h s 40%)',
          700: 'hsl(from var(--color-secondary) h s 30%)',
          800: 'hsl(from var(--color-secondary) h s 20%)',
          900: 'hsl(from var(--color-secondary) h s 10%)',
          950: 'hsl(from var(--color-secondary) h s 5%)',
        },
        // Akzentfarbe (dynamisch aus CSS-Variablen)
        accent: {
          DEFAULT: 'var(--color-accent)',
          50: 'hsl(from var(--color-accent) h s 97%)',
          100: 'hsl(from var(--color-accent) h s 90%)',
          200: 'hsl(from var(--color-accent) h s 80%)',
          300: 'hsl(from var(--color-accent) h s 70%)',
          400: 'hsl(from var(--color-accent) h s 60%)',
          500: 'var(--color-accent)',
          600: 'hsl(from var(--color-accent) h s 40%)',
          700: 'hsl(from var(--color-accent) h s 30%)',
          800: 'hsl(from var(--color-accent) h s 20%)',
          900: 'hsl(from var(--color-accent) h s 10%)',
          950: 'hsl(from var(--color-accent) h s 5%)',
        },
      },
      // Anpassen der Schriftarten
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      // Anpassen der Rundungen
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      // Anpassen der Schatten
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      // Anpassen der Animationen
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-delayed': 'fadeIn 1s ease-in-out 0.5s forwards',
        'fade-in-delayed-2': 'fadeIn 1s ease-in-out 1s forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': '#f97316',
          '--color-secondary': '#6b7280',
          '--color-accent': '#ef4444',
        },
      });
    }
  ],
}; 