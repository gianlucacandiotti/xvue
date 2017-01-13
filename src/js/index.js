import './bootstrap';

/**
 * Require all components dynamically.
 */

const components = require.context('./components', true, /index\.js$/);

components.keys().forEach(components);

// import './components/Hello';
