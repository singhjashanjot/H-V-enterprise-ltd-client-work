import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ─── "Boreal Timber & Iron" Design System Colors ──────
      colors: {
        // Primary
        primary: '#263D2A',
        'primary-container': '#3C5440',
        'primary-fixed': '#CEEACF',
        'primary-fixed-dim': '#B2CEB4',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#ACC7AE',
        'on-primary-fixed': '#092010',
        'on-primary-fixed-variant': '#344C39',
        'inverse-primary': '#B2CEB4',

        // Secondary
        secondary: '#625E58',
        'secondary-container': '#E6DED7',
        'secondary-fixed': '#E9E1DA',
        'secondary-fixed-dim': '#CCC5BE',
        'on-secondary': '#FFFFFF',
        'on-secondary-container': '#67625C',
        'on-secondary-fixed': '#1E1B17',
        'on-secondary-fixed-variant': '#4A4641',

        // Tertiary
        tertiary: '#283C2C',
        'tertiary-container': '#3F5342',
        'tertiary-fixed': '#D1E9D2',
        'tertiary-fixed-dim': '#B5CCB7',
        'on-tertiary': '#FFFFFF',
        'on-tertiary-container': '#AFC6B0',
        'on-tertiary-fixed': '#0C1F12',
        'on-tertiary-fixed-variant': '#374C3B',

        // Surface System
        background: '#FBF9F5',
        surface: '#FBF9F5',
        'surface-bright': '#FBF9F5',
        'surface-dim': '#DBDAD6',
        'surface-container': '#EFEEEA',
        'surface-container-high': '#E9E8E4',
        'surface-container-highest': '#E4E2DE',
        'surface-container-low': '#F5F3EF',
        'surface-container-lowest': '#FFFFFF',
        'surface-variant': '#E4E2DE',
        'surface-tint': '#4C644F',
        'on-surface': '#1B1C1A',
        'on-surface-variant': '#434842',
        'on-background': '#1B1C1A',
        'inverse-surface': '#30312E',
        'inverse-on-surface': '#F2F1ED',

        // Outline
        outline: '#737972',
        'outline-variant': '#C3C8C0',

        // Error
        error: '#BA1A1A',
        'error-container': '#FFDAD6',
        'on-error': '#FFFFFF',
        'on-error-container': '#93000A',
      },

      // ─── Typography ───────────────────────────────────────
      fontFamily: {
        display: ['var(--font-bricolage)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-lg': ['clamp(5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-lg': ['clamp(3rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-md': ['clamp(2rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'title-lg': ['clamp(1.375rem, 2vw, 1.625rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '0em', fontWeight: '400' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '500' }],
        'label-sm': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '500' }],
      },

      // ─── Border Radius ────────────────────────────────────
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },

      // ─── Shadows (Ambient, on-surface tinted) ────────────
      boxShadow: {
        ambient: '0 24px 48px rgba(27, 28, 26, 0.06)',
        'ambient-lg': '0 32px 64px rgba(27, 28, 26, 0.08)',
        'ambient-sm': '0 8px 24px rgba(27, 28, 26, 0.04)',
      },

      // ─── Animations ───────────────────────────────────────
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },

      // ─── Spacing ──────────────────────────────────────────
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ─── Transition ───────────────────────────────────────
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
