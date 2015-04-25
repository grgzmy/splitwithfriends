var app = angular.module('splitwithfriendsApp');

app.controller('ExpensesListCtrl', ['$scope', '$expenses', '$friends', '$filter', function($scope, $expenses, $friends, $filter){
	function aggreagte(expenses){
		var map = {};

		angular.forEach(expenses, function(expense){
			if(map[expense.friendId]){
				map[expense.friendId].total += expense.amount;
			}else{
				map[expense.friendId] = {friendId: expense.friendId, friendName: getFriendName(expense.friendId), total: expense.amount};
			}
		});

		var output = [];
		angular.forEach(map, function(expense){
			output.push(expense);
		});
		return output;
	};

	function getFriendName(id){
		return $filter('filter')($friends.list, id)[0].friendName;
	};

	$expenses.get().success(function(){
		$scope.expenses = aggreagte($expenses.expenses.list);
		$scope.totals = $expenses.expenses.totals;
	});


}]);
