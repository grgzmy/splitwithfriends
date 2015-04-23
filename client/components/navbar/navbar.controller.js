'use strict';

angular.module('splitwithfriendsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Friends',
        'link': '/#/friends'        
      },
      {
        'title': 'Expenses',
        'link': '/#/expenses/list'        
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });