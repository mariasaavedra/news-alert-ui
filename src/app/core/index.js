
import login from './login/index.js';
import home from './home/index.js';
import dashboard from './dashboard/index.js';

export default angular
  .module('core', [
    'login',
    'home',
    'dashboard'
  ]).name; 