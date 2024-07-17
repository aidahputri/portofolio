import type { Config } from 'tailwindcss'

const config: Config = {
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
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg1: 'rgb(108, 0, 162)',
        bg2: 'rgb(0, 17, 82)',
        color1: 'rgba(18, 113, 255, 0.8)',
        color2: 'rgba(221, 74, 255, 0.8)',
        color3: 'rgba(100, 220, 255, 0.8)',
        color4: 'rgba(200, 50, 50, 0.8)',
        color5: 'rgba(180, 180, 50, 0.8)',
        'color-interactive': 'rgba(140, 100, 255, 0.8)',
      },
      animation: {
        moveInCircle: 'moveInCircle 40s linear infinite',
        moveVertical: 'moveVertical 30s ease infinite',
        moveHorizontal: 'moveHorizontal 40s ease infinite',
      },
      keyframes: {
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
