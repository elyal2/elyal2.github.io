/**
 * Transformers.js ESM Bridge Loader
 * Conforms to ADR-0003 / ADR-0008: Externalized module to eliminate 'unsafe-inline' in CSP.
 */
try {
  import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js')
    .then(mod => {
      window.TransformersEngine = { pipeline: mod.pipeline, env: mod.env };
      window.dispatchEvent(new CustomEvent('transformers:loaded'));
    })
    .catch(err => {
      console.warn('Transformers.js load failed:', err);
      window.dispatchEvent(new CustomEvent('transformers:error', { detail: err }));
    });
} catch (err) {
  console.warn('Transformers.js import unsupported:', err);
  window.dispatchEvent(new CustomEvent('transformers:error', { detail: err }));
}
