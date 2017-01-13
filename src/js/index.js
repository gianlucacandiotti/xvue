import './bootstrap';

/**
 * Require all components dynamically.
 * It doesn't currently support hot reloading so I'll be commenting it until I fix it.
 */

// const components = require.context('./components', true, /index\.js$/);

// components.keys().forEach(components);

import './components/Hello';
