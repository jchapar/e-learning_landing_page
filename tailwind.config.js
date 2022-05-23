module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      purple: '#666CA3',
      darkPurple: '#13183F',
      gray: '#83869A',
      pink: '#F74780',
      lightPink: '#FFA7C3',
      gradientOne: '#F02AA6',
      gradientTwo: '#FF6F48',
      gradientThree: '#4851FF',
      gradientFour: '#F02AA6',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
