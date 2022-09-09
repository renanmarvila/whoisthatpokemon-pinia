import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
    formsPlugin]
    ,
  attributify: true,
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
})