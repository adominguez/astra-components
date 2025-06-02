const { execSync } = require('child_process');

const [,, packageName, releaseType] = process.argv;

if (!packageName || !releaseType) {
  console.error('❌ Uso: pnpm run publish <core-react|core-astro> <patch|minor|major>');
  process.exit(1);
}

const scope = `@astrahub/${packageName}`;
const path = `packages/${packageName}`;

try {
  if (packageName === 'core-react') {
    console.log(`📦 Compilando ${scope}...`);
    execSync(`pnpm --filter ${scope} build`, { stdio: 'inherit' });
  }

  // Si hay cambios sin commit, los hace automáticamente
  console.log(`🔍 Verificando cambios...`);
  const hasChanges = execSync('git status --porcelain').toString().trim().length > 0;

  if (hasChanges) {
    console.log(`📥 Haciendo commit de los cambios...`);
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "chore(${packageName}): prepare ${releaseType} release"`, { stdio: 'inherit' });
  }

  console.log(`📈 Bumping versión (${releaseType}) en ${scope}...`);
  execSync(`pnpm --filter ${scope} version ${releaseType}`, { stdio: 'inherit' });

  console.log(`🚀 Publicando ${scope}...`);
  execSync(`pnpm --filter ${scope} publish --access public`, { stdio: 'inherit' });

  console.log(`✅ Publicación de ${scope} completada.`);
} catch (error) {
  console.error(`❌ Error durante la publicación de ${scope}`);
  process.exit(1);
}
