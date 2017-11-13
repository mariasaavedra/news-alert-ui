import AuthController from './auth.controller.js';
import AuthService from './auth.service.js';

export default angular
  .module('auth', [])
  .service('AuthService', AuthService)
  .controller('AuthController', AuthController)
  .name;