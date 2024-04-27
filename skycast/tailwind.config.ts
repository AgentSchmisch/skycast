import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        skycast:{
          Jet : "#353535",
          CaribbeanCurrent:"#3C6E71",
          White:"#FFFFFFF",
          Platinum:"#D9D9D9",
          IndigoDye:"#284B63"
      },

        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
      },
      brightness: {
        30: 'brightness(0.3)',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
