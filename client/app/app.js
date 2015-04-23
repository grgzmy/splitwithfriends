'use strict';

angular.module('splitwithfriendsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/expenses/list');

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
	  })
	  .state('expenses', {
	  	url: '/expenses',
	  	templateUrl: 'app/expenses/expenses.html'
	  })
	  .state('expenses.list', {
	  	url: '/list',
	  	templateUrl: 'app/expenses/list.expenses.html',
	  	controller: 'ExpensesListCtrl'
	  })
	  .state('expenses.view', {
	  	url: '/view/:friendId',
	  	templateUrl: 'app/expenses/view.expenses.html',
	  	controller: 'ExpensesViewCtrl'
	  })
	  .state('expenses.add', {
	  	url: '/add',
	  	templateUrl: 'app/expenses/add.expenses.html',
	  	controller: 'AddExpenseCtrl'
	  });


    $locationProvider.html5Mode(false);
  });