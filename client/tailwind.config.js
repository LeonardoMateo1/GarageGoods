module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '0.75rem', // 12px
      'sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5.625rem', // 90px
    },
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "alternate-bg" : "#2F2F2F",
        "primary" : "#111111",
        "action" : "#FFCB74",
        "light-text" : "#71797E",
        "faded-white" : "#F6F6F6",
        "" : "",
        "" : "",
      }
    },
  },
  plugins: [],
}