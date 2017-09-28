import LoginController from './login.controller.js';
import LoginService from './login.service.js';

export default angular
  .module('login', [])
  .service('LoginService', LoginService)
  .controller('LoginController', LoginController)
  .name;