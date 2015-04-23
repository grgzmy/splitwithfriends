angular.module('splitwithfriendsApp').controller('AddExpenseCtrl', ['$scope', '$friends', '$expenses', '$state', function($scope, $friends, $expenses, $state){

	$scope.friendsToAdd = angular.copy($friends.list);
	$scope.addedFriends = [];

	var expenses = [];

	$scope.addFriend = function(i){
		$scope.addedFriends.push($scope.friendsToAdd[i]);
		$scope.friendsToAdd.splice(i, 1);
	};


	function add(amount){
		angular.forEach($scope.friendsToAdd, function(friend){
			var exp = {friendId: friend.id, amount: amount, note: $scope.note};
			expenses.push(exp);
			if($expenses.byFriend[friend.id]){
				$expenses.byFriend[friend.id].push(exp);
			}else{
				$expenses.byFriend[friend.id] = [exp];
			}
		});
		$expenses.add(expenses);
		$expenses.expenses.list.concat[expenses];

		$state.go('expenses.list');		
	}

	$scope.split = function(){
		var perPerson = $scope.amount / ($scope.frinedsToAdd + 1);
		add(perPerson);
	};

	$scope.iPaid = function(){
		add($scope.amount);
	};

	$scope.theyPaid = function(){
		add(-1 * $scope.admount);
	};




}]);