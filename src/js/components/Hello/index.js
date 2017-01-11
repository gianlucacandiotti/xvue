import mountComponent from 'src/js/utils/mountComponent';
import Hello from './Hello';

export default (function mountWelcome() {
  mountComponent('hello', Hello);
}());
