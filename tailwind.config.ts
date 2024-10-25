import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#ffffff30',
        secondary: '#bbb',
        accent: '#4bffa5',
      },
    },
  },
  plugins: [],
}
export default config
