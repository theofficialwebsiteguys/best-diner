
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
    'index.csr.html': {size: 5285, hash: '57d82e3ce12d987df4e658073eb94f0d380aff2ebf83bdfae25c9ede4013b446', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: '9dbe62a55912c1f2bda540700814ebda1663911c4c84c8681949c2c5a7571346', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JCUBLLHF.css': {size: 234167, hash: 'scinUUTXv9s', text: () => import('./assets-chunks/styles-JCUBLLHF_css.mjs').then(m => m.default)}
  },
};
