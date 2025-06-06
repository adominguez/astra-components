const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const [pkg, versionType = "patch", maybeForceFlag] = process.argv.slice(2);
const forcePublish = maybeForceFlag === "--force";

if (!pkg || !["core-react", "core-astro", "themes"].includes(pkg)) {
  console.error("❌ Especifica un paquete válido: core-react, core-astro o themes");
  process.exit(1);
}

const fullPackageName = `@astrahub/${pkg}`;
const pkgPath = path.resolve(__dirname, `../packages/${pkg}`);
const pkgJsonPath = path.join(pkgPath, "package.json");

// --- Paso 1: Validar package.json
let pkgJson;
try {
  const content = fs.readFileSync(pkgJsonPath, "utf8");
  pkgJson = JSON.parse(content);
} catch (err) {
  console.error("❌ Error al leer o parsear package.json:", err.message);
  process.exit(1);
}

// --- Paso 2: Comprobación del estado del repo
try {
  const gitStatus = execSync("git status --porcelain").toString().trim();
  if (gitStatus !== "" && !forcePublish) {
    console.error("❌ El repositorio tiene cambios sin commitear. Usa '--force' para forzar la publicación.");
    process.exit(1);
  }
} catch (err) {
  console.error("❌ Error al comprobar el estado de Git:", err.message);
  process.exit(1);
}

// --- Paso 3: Bump manual de versión
function bumpVersion(current, type) {
  const [major, minor, patch] = current.split(".").map(Number);
  switch (type) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

const newVersion = bumpVersion(pkgJson.version, versionType);
pkgJson.version = newVersion;
fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
console.log(`📦 Versión actualizada a ${newVersion}\n`);

// --- Paso 4: Compilar, publicar y actualizar
try {
  console.log(`📦 Compilando ${fullPackageName}...\n`);
  execSync(`pnpm --filter ${fullPackageName} build`, { stdio: "inherit" });

  console.log(`📤 Publicando ${fullPackageName}@${newVersion} en npm...\n`);
  const publishCmd = `pnpm --filter ${fullPackageName} publish --access public${forcePublish ? " --no-git-checks" : ""}`;
  execSync(publishCmd, { stdio: "inherit" });

  console.log(`🔄 Actualizando dependencias en app-astra-components...\n`);
  execSync(`pnpm add ${fullPackageName}@latest --workspace --filter app-astra-components`, { stdio: "inherit" });

  console.log(`🚀 Lanzando entorno de desarrollo...\n`);
  execSync(`pnpm --filter app-astra-components dev`, { stdio: "inherit" });

} catch (err) {
  console.error(`❌ Error durante el proceso: ${err.message}`);
  process.exit(1);
}
