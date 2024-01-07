import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  entry: ['lib/main.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom', '@mui/material', /^@emotion/],
  splitting: false,
  minify: true,
  clean: true,
  tsconfig: 'tsconfig-build.json'
});

// eslint-disable-next-line import/no-default-export
export default tsupConfig;
