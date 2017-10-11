import HomeController from './home.controller.js';
//import HomeService from './home.service.js';

export default angular
  .module('home', [])
  //.service('HomeService', HomeService)
  .controller('HomeController', HomeController)
  .name;