
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
    'index.csr.html': {size: 5285, hash: '1289ef397a6b657d01fdfc9d91e78478db70c373dbeb3ab111dfd8f8dcd4155c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: '4db56187cdd158b4d0a7150114c6fe9fc8859ac9ee48d5fc52af8e8789ff4664', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JCUBLLHF.css': {size: 234167, hash: 'scinUUTXv9s', text: () => import('./assets-chunks/styles-JCUBLLHF_css.mjs').then(m => m.default)}
  },
};
