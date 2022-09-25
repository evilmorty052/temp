import { defineConfig, loadEnv } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react({
    jsxRuntime: 'classic',
  })],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       // 'process.env': env.App_ENV
//       'process.env': process.env
//     },
//       css: {
//     postcss,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: [
//       {
//         find: /^~.+/,
//         replacement: (val) => {
//           return val.replace(/^~/, "");
//         },
//       },
//     ],
//   },
//   build: {
//         commonjsOptions: {
//           transformMixedEsModules: true,
//         }
//       } 
  
   
//   }
// })

