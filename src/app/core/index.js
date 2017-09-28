
import login from './login/index.js';
import dashboard from './dashboard/index.js';

export default angular
  .module('core', [
    'login',
    'dashboard'
  ]).name; 