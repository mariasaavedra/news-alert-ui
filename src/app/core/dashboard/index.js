import DashboardController from './dashboard.controller.js';
import DashboardService from './dashboard.service.js';

export default angular
  .module('dashboard', [])
  .service('DashboardService', DashboardService)
  .controller('DashboardController', DashboardController)
  .name;