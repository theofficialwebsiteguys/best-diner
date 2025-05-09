
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/best-diner/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-PN2G25Z5.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 5285, hash: 'c22945f6dbd3b855fd13c0ccc4358f017e56a4d018d93dfaec35deb3a79fcf8e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: '0274495c8f0b8feee0b74a9074946feb687fbeb1503046344ac8fcd73a9d3d1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JCUBLLHF.css': {size: 234167, hash: 'scinUUTXv9s', text: () => import('./assets-chunks/styles-JCUBLLHF_css.mjs').then(m => m.default)}
  },
};
