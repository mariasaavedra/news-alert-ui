
import auth from './auth/index.js';
import home from './home/index.js';
import dashboard from './dashboard/index.js';

export default angular
  .module('core', [
    'auth',
    'home',
    'dashboard'
  ]).name; 