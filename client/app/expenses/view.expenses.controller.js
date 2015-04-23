angular.module('splitwithfriendsApp').controller('ExpensesViewCtrl', ['$scope', '$expenses', '$stateParams', '$rootScope', function($scope, $expenses, $stateParams){
	//$expenses.getForFriend($stateParams.friendId);
	$scope.expenses = $expenses.byFriend[$stateParams.friendId];
	$scope.totals = $expenses.computeTotals($scope.expenses);
	$scope.$parent.friendName = $scope.expenses[0].friendName;

	$scope.removeExpense = function(i){
		$expenses.deleteForFriend($scope.expenses[i], $stateParams.friendId);
		$scope.expenses.splice(i, 1);
		$scope.totals = $expenses.computeTotals($scope.expenses);
	};


}]);