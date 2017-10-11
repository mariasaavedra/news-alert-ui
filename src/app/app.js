import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import aria from 'angular-aria';
import messages from 'angular-messages';
import ngMaterial from 'angular-material';
import core from './core/index.js';
import data from './data/index.js';

angular.module('app', [
        'ngMaterial',
        'ui.router',
        'core',
        'data'
    ])
    .config(config)
    .run(run)

function config($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider, $sceProvider) {
    $sceProvider.enabled(false);
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./views/public/login.html'),
            controller: "LoginController as login",
        })
        .state('home', {
            url: '/home',
            template: require('./views/public/home.html'),
            controller: "HomeController as home",
        })
        .state('dashboard', {
            url: '/dashboard',
            template: require('./views/account/dashboard.html'),
            controller: "DashboardController as dashboard",
        })
}
function run(){
    console.log("app init..");
}