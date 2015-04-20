angular.module('splitwithfriendsApp').controller('FriendsCtrl', ['$http', '$scope', '$friends', function($http, $scope){
	$scope.friends = $friends.list;	

	$scope.addFriend = function(){
		var newFriend = {name: $scope.newFriend}
		$scope.newFriend = undefined;	

		$scope.friends.push(newFriend);
		$friends.add(newFriend);
	};

	$scope.removeFriend = function(i){
		$scope.friends.splice(i, 1);
		$friends.delete($scope.friends[i]);
	};

	function addFriend(newFriend){
		$http({
			method: 'POST',
			url: api,
			data: newFriend
		}).success(function(){
			console.log('Successfully added friend');
		}).error(function(){
			console.log('Could not add friend');
		});
	}

	function removeFriend(byebye){
		
	}
}]);