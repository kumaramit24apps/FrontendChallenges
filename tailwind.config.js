/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'card-background':
          "url('../../src/assets/bg/profile-card-blurred-bg.svg')",
      },
    },
  },
  plugins: [],
};
