const { execSync } = require('child_process')

const [pkg, versionType = 'patch'] = process.argv.slice(2)

if (!pkg || !['core-react', 'core-astro'].includes(pkg)) {
  console.error('❌ Especifica un paquete válido: core-react o core-astro')
  process.exit(1)
}

const fullPackageName = `@astrahub/${pkg}`
const path = `packages/${pkg}`

try {
  console.log(`📦 Compilando ${fullPackageName}...\n`)
  execSync(`pnpm --filter ${fullPackageName} build`, { stdio: 'inherit' })

  console.log(`📈 Subiendo versión (${versionType}) de ${fullPackageName}...\n`)
  execSync(`pnpm --filter ${fullPackageName} version ${versionType}`, { stdio: 'inherit' })

  console.log(`📤 Publicando ${fullPackageName} en npm...\n`)
  execSync(`pnpm --filter ${fullPackageName} publish --access public`, { stdio: 'inherit' })

  console.log(`🔄 Actualizando dependencias en astra-components...\n`)
  execSync(`pnpm add ${fullPackageName}@latest --workspace --filter astra-components`, { stdio: 'inherit' })

  console.log(`🚀 Lanzando entorno de desarrollo de astra-components...\n`)
  execSync(`pnpm --filter astra-components dev`, { stdio: 'inherit' })

} catch (err) {
  console.error(`❌ Error durante el proceso: ${err.message}`)
  process.exit(1)
}
