import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import { fileURLToPath } from 'url'

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        '@astra/core-react': fileURLToPath(new URL('../../packages/core-react/src', import.meta.url)),
        '@astra/core-astro': fileURLToPath(new URL('../../packages/core-astro/src', import.meta.url)),
        '@layout': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
      }
    }
  }
})