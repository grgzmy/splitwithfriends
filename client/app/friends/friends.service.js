angular.module('splitwithfriendsApp').service('$friends', ['$http', function($http){
	var api = '/api/friends/';
	var Friends = function(){
		this.list = [
		];
		this.get();
	};

	Friends.prototype.delete = function(byebye){
		$http({
			method: 'DELETE',
			url: api + '/' + byebye.id
		}).success(function(){
			console.log('Successfully deleted friend');
		}).error(function(){
			console.log('Could not delete friend');
		});
	};

	Friends.prototype.add = function(friend){
		var promise = $http({
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
		var promise = $http.get(api)
		promise.success(function(resp){
			angular.copy(resp, that.list);
		}).error(function(){
			console.log('Error getting friends');
		});
		return promise;
	}
	return new Friends();
}]);
