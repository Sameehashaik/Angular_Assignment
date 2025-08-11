export default import('../dist/angular_app/server.mjs')
    .then((m) => (typeof m.app === 'function' ? m.app() : m.app));
