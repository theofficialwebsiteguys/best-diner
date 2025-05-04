
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
    'index.csr.html': {size: 5285, hash: '6285e5e74c9f8733b83119eb256c6ed3a11bac57f7fb9a48620952cf860d2c83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: '14ef752ce95e97c4db96b84cc4c5d56cbe2d541f6b6cc695be63dfb132de0d69', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JCUBLLHF.css': {size: 234167, hash: 'scinUUTXv9s', text: () => import('./assets-chunks/styles-JCUBLLHF_css.mjs').then(m => m.default)}
  },
};
