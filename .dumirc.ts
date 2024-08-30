import { defineConfig } from 'dumi';


export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : 'https://panchong1205.github.io/package_doc/docs-dist/',
  themeConfig: {
    name: 'pc1205',
  },
});
