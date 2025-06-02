const { execSync } = require('child_process')

const packages = ['@astrahub/core-react', '@astrahub/core-astro', '@astrahub/themes']
const targetApp = 'astro-docs'

console.log(`🔄 Actualizando paquetes en ${targetApp}...\n`)

for (const pkg of packages) {
  console.log(`📦 Actualizando ${pkg} a la última versión...`)
  execSync(`pnpm add ${pkg}@latest --workspace --filter ${targetApp}`, { stdio: 'inherit' })
}

console.log('\n✅ Actualización completa.\n')
