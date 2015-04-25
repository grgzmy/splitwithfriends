var app = angular.module('splitwithfriendsApp');

app.controller('ExpensesListCtrl', ['$scope', '$expenses', function($scope, $expenses){
	function aggreagte(expenses){
		var map = {};

		angular.forEach(expenses, function(expense){
			if(map[expense.friendId]){
				map[expense.friendId].total += expense.amount;
			}else{
				map[expense.friendId] = {friendId: expense.friendId, friendName: expense.friendName, total: expense.amount};
			}
		});

		var output = [];
		angular.forEach(map, function(expense){
			output.push(expense);
		});
		return output;
	};

	$scope.expenses = aggreagte($expenses.expenses.list);
	$scope.totals = $expenses.expenses.totals;

}]);
