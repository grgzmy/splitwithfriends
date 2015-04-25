angular.module('splitwithfriendsApp').controller('FriendsCtrl', ['$http', '$scope', '$friends', function($http, $scope, $friends){
	$scope.friends = $friends.list;

	$scope.addFriend = function(){
		var newFriend = {friendName: $scope.newFriend}
		$scope.newFriend = undefined;

		$scope.friends.push(newFriend);
		$friends.add(newFriend);
	};

	$scope.removeFriend = function(i){
		$friends.delete($scope.friends[i]);
		$scope.friends.splice(i, 1);
	};
}]);
