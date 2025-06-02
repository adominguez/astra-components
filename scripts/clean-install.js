#!/usr/bin/env node

const { execSync } = require('node:child_process');
const { rmSync, existsSync } = require('node:fs');
const { join } = require('node:path');

const log = (msg) => console.log(`🧹 ${msg}`);

const pathsToDelete = [
  'node_modules',
  'pnpm-lock.yaml',
  'packages/core-react/node_modules',
  'packages/core-astro/node_modules',
  'packages/themes/node_modules',
];

for (const path of pathsToDelete) {
  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true });
    log(`Eliminado ${path}`);
  }
}

try {
  log('Instalando dependencias con pnpm...');
  execSync('pnpm install', { stdio: 'inherit' });
  log('✅ Instalación completada correctamente.');
} catch (err) {
  console.error('❌ Error durante la instalación:', err.message);
  process.exit(1);
}
