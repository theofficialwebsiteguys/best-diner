
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/best-diner/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-3PNXMNAV.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 5285, hash: 'fb3768b548b8fb9e2fc921487f43cea96beaed7107095df18e685478241ada57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: '60648200946b0972a04608027257873586770419d3e3f71b589b7226a654987c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JCUBLLHF.css': {size: 234167, hash: 'scinUUTXv9s', text: () => import('./assets-chunks/styles-JCUBLLHF_css.mjs').then(m => m.default)}
  },
};
