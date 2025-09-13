import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild', // Use esbuild instead of terser for faster builds
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for third-party libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animation'
            }
            return 'vendor'
          }

          // Separate chunks for different app sections
          if (id.includes('src/pages/')) {
            return 'pages'
          }

          if (id.includes('src/components/')) {
            return 'components'
          }

          if (id.includes('src/hooks/') || id.includes('src/utils/')) {
            return 'utils'
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      },
      // External dependencies for better caching
      external: (id) => {
        // Don't bundle these in production for better caching
        return false // Keep all dependencies bundled for now
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500, // Stricter chunk size limits
    assetsInlineLimit: 4096, // Inline small assets
    cssCodeSplit: true,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
    // Allow hosts for production deployment
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ps1-93r9.onrender.com',
      '.onrender.com', // Allow all Render subdomains
      ...(process.env.RENDER_EXTERNAL_URL ? [process.env.RENDER_EXTERNAL_URL.replace('https://', '').replace('http://', '')] : [])
    ],
    // Enable HTTP/2 in development
    https: false,
    // Proxy configuration for API calls
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    port: 4173,
    host: true,
    cors: true,
    // Allow hosts for production deployment
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ps1-93r9.onrender.com',
      '.onrender.com', // Allow all Render subdomains
      ...(process.env.RENDER_EXTERNAL_URL ? [process.env.RENDER_EXTERNAL_URL.replace('https://', '').replace('http://', '')] : [])
    ]
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion'
    ],
    exclude: [
      // Exclude large dependencies that should be lazy loaded
    ],
    force: false
  },
  esbuild: {
    // Remove console statements in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none'
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // Add CSS preprocessing if needed
    }
  },
  json: {
    namedExports: true,
    stringify: false
  }
})