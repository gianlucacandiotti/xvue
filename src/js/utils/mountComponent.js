import Vue from 'vue';

export default function mountComponent(selector, component, props = null) {
  // eslint-disable-next-line no-undef
  const mountPoint = document.getElementById(selector);

  if (mountPoint) {
    // eslint-disable-next-line no-new
    new Vue({
      el: `#${selector}`,
      render: h => h(component, { props }),
    });
  }
}
