import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ],
  darkMode:'class',
  theme:{
    extend:{
      color:{
        "primary": '#E58411',
        "secondary": "#1E1E1E",
        "secondary-bg": "#F7F7F7",
      }
    }
  }
  
})
