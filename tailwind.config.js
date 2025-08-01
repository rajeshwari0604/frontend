/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'ping-slow': 'pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s infinite',
      },
      keyframes: {
        pingSlow: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(-5px)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],

}
