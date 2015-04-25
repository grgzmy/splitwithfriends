angular.module('splitwithfriendsApp').controller('ExpensesViewCtrl', ['$scope', '$expenses', '$stateParams', '$rootScope', '$filter', '$friends', function($scope, $expenses, $stateParams, $rootScope, $filter, $friends){
	$expenses.get().success(function(){
		$scope.expenses = $filter('filter')($expenses.expenses.list, $stateParams.friendId);
		$scope.totals = $expenses.computeTotals($scope.expenses);
	});

	$friends.get().success(function(){
		$scope.$parent.friendName = $filter('filter')($friends.list, $stateParams.friendId)[0].friendName;
	});

	$scope.removeExpense = function(i){
		$expenses.delete($scope.expenses[i]);
		$scope.expenses.splice(i, 1);
		$scope.totals = $expenses.computeTotals($scope.expenses);
	};


}]);
