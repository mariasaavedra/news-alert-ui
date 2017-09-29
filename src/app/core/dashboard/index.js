import DashboardController from './dashboard.controller.js';
import DashboardService from './dashboard.service.js';

export default angular
  .module('dashboard', [])
  .service('DashboardService', DashboardService)
  .controller('DashboardController', DashboardController)
  .filter('htmlToPlaintext', function() {
      return function(text) {
        var txt = text ? String(text).replace(/<[^>]+>/gm, '') : '';
        return _.unescape(txt);
      };
    })
  .name;