/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Quicksand': ['QuicksandBold']
    },
    extend: {
      colors: {
        textBase: '#333333',
        textMuted: '#737373',        // colors.neutral[500]
        background1: '#f7f7f7',      // colors.neutral[50]
        background2: '#e8e8e8',
        surface:  '#ffffff',       // colors.neutral[100]'#ef4444',
        primary: {
          DEFAULT: '#5E60F0',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F9A826',
          foreground: '#171717',    // colors.neutral[900]
        },
        destructive: {
          DEFAULT: '#ef4444',      // colors.red[500]
          foreground: '#fafafa',    // colors.neutral[50]
        },
        accent: {
          DEFAULT: '#f5f5f5',      // colors.neutral[100]
          foreground: '#171717',    // colors.neutral[900]
        },
        input: '#d4d4d4',          // colors.neutral[300]
      }
    },
  },
  plugins: [],

}