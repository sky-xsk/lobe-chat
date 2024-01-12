import { resolve, dirname } from 'node:path';
import { defineConfig } from 'vitest/config';

import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  optimizeDeps: {
    exclude: ['crypto', 'util', 'tty'],
    include: ['@lobehub/tts'],
  },
  test: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    coverage: {
      all: false,
      exclude: ['__mocks__/**'],
      provider: 'v8',
      reporter: ['text', 'json', 'lcov', 'text-summary'],
    },
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    // threads: false,
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
});
