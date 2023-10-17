/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'scale-up': 'scaleUp 1s ease-in 1',
        'fade-in': 'fadeIn 2s ease-in-out 1',
        'fade-out': 'fadeOut 2s ease-in-out 1',
        'fade-in-fast': 'fadeInFast 0.4s ease-out 1',
        'from-left': 'fromLeft 1s ease-out 1',
        'from-right': 'fromRight 1s ease-out 1'
      },
      keyframes: () => ({
        scaleUp: {
          '0%': { transform: 'scale(100%)' },
          '40%': { transform: 'scale(70%)', filter: 'blur(1px)' },
          '100%': { transform: 'scale(1000%)', filter: 'blur(100px)' }
        },
        fadeIn: {
          '0%': { opacity: 0},
          '50%': { opacity: 0},
          '100%': { opacity: 100}
        },
        fadeOut: {
          '100%': { opacity: 0},
          '50%': { opacity: 0},
          '0%': { opacity: 100}
        },
        fadeInFast: {
          '0%': { opacity: 0},
          '100%': { opacity: 100}
        },
        fromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }),
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1.166', letterSpacing: '-0.01em' }],
        '7xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },

    },
    
  },
  plugins: [],
}
