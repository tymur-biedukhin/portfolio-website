import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#bbb',
        accent: '#4bffa5',
      },
    },
  },
  plugins: [],
}
export default config
