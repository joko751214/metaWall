module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#E2EDFA',
          800: '#03438D',
        },
        gray: {
          100: '#EFECE7',
          400: '#9B9893',
          450: '#A8B0B9',
          500: '#808080',
        },
        yellow: {
          400: '#EEC32A',
        },
      },
      fontFamily: {
        primary: `'Noto Sans TC', sans-serif`,
        secondary: `'Azeret Mono', monospace`,
        special: `'Paytone One', sans-serif`,
      },
    },
  },
  plugins: [],
};
