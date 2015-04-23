angular.module('splitwithfriendsApp').service('$friends', ['$http', function($http){
	var api = '/api/friends/';
	var Friends = function(){
		this.list = [
			{id: 1, friendName: "George"},
			{id: 2, friendName: "Rami"},
			{id: 3, friendName: "Sara"},
		];
		//this.get()
	};

	Friends.prototype.delete = function(byebye){
		$http({
			method: 'DELETE',
			url: api,
			data: byebye
		}).success(function(){
			console.log('Successfully deleted friend');
		}).error(function(){
			console.log('Could not delete friend');
		});
	};

	Friends.prototype.add = function(friend){
		$http({
			method: 'POST',
			url: api,
			data: friend
		}).success(function(){
			console.log('Successfully added friend ' + friend);
		}).error(function(){
			console.log('Could not add friend');
		});
	};

	Friends.prototype.get = function(){
		var that = this;
		$http.get(api).success(function(resp){
			angular.copy(resp, that.list);
		}).error(function(){
			console.log('Error getting friends');
		});
	}
	return new Friends();
}]);