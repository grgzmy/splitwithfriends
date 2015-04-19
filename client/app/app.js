'use strict';

angular.module('splitwithfriendsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

	    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
	      .state('friends', {
	      	url: '/friends',
	      	templateUrl: 'app/friends/friends.html',
	      	controller: 'FriendsCtrl'
	      });
    $locationProvider.html5Mode(true);
  });