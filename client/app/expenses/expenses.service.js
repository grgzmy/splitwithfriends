angular.module('splitwithfriendsApp').service('$expenses', ['$http', function($http){
	var api = '/api/expenses';
	var Expenses = function(){
		var that = this;
		this.computeTotals = function(expenses){
			var result = {
				youOwe: 0,
				youAreOwed: 0,
				net: 0
			};
			angular.forEach(expenses, function(expense){
				result.net += expense.amount;
				result.youOwe += expense.amount < 0 ? expense.amount : 0;
				result.youAreOwed += expense.amount > 0 ? expense.amount : 0;
			});
			return result;
		};
		this.expenses = {
			list: [
				{note: "coffee", friendId: "1", friendName: 'George', amount: 14},
				{note: "coffee", friendId: "1", friendName: 'George', amount: 14},
				{note: "coffee", friendId: "1", friendName: 'George', amount: 14},
				{note: "coffee", friendId: "2", friendName: 'Rami', amount: 14},
				{note: "coffee", friendId: "2", friendName: 'Rami', amount: 14},
				{note: "coffee", friendId: "3", friendName: 'Sara', amount: 14},
				{note: "coffee",  friendId: "3", friendName: 'Sara', amount: 14},
				{note: "coffee", friendId: "3", friendName: 'Sara', amount: 14}
			]
		};
		this.expenses.totals = that.computeTotals(that.expenses.list)

		this.byFriend = {
			"1":[
				{note: "coffee", friendId: "1", friendName: 'George', amount: 14},
				{note: "coffee", friendId: "1", friendName: 'George', amount: 14},
				{note: "coffee", friendId: "1", friendName: 'George', amount: 14}
			],
			"2":[
				{note: "coffee", friendId: "2", friendName: 'Rami', amount: 14},
				{note: "coffee", friendId: "2", friendName: 'Rami', amount: 14}
			],
			"3": [
				{note: "coffee", friendId: "3", friendName: 'Sara', amount: 14},
				{note: "coffee", friendId: "3", friendName: 'Sara', amount: 14},
				{note: "coffee", friendId: "3", friendName: 'Sara', amount: 14}
			]
		};


		//this.get();
	};

	Expenses.prototype.get = function(){
		var that = this;
		$http({
			method: 'GET',
			url: api,
		}).success(function(resp){
			that.expenses = {
				list: resp,
				totals: that.computeTotals(resp)
			}
		}).error(function(){
			console.log("Error fetching expenses");
		});
	};

	Expenses.prototype.add = function(newExpenses){
		$http({
			method: 'POST',
			url: api,
			data: newExpenses //[{friend: friend, amount: amount}]
		}).success(function(){
			console.log("Success adding expenses");

		}).error(function(){
			console.log("Error adding expenses");
		});
	};

	Expenses.prototype.delete = function(expense){
		$http({
			method: 'DELETE',
			url: api,
			data: expense
		}).success(function(){
			console.log("Success deleting expense");

		}).error(function(){
			console.log("Error deleting expense");
		});
	};	

	Expenses.prototype.getForFriend = function(friendId){
		var that = this;
		$http({
			method: 'GET',
			url: api + '/' + friendId
		}).success(function(resp){
			that.byFriend[friendId] = {
				list: resp,
				totals: that.computeTotals(resp)
			};
		}).error(function(){
			console.log('error getting expenses for friend');
		});
	};

	Expenses.prototype.deleteForFriend = function(expense, friendId){
		$http({
			method: 'DELETE',
			url: api + '/' + friendId,
			data: expense
		}).success(function(){
			console.log('successfully delete expense for friend');
		}).error(function(){
			console.log('failed to delete expense for friend');
		});
	};



	return new Expenses();
}]).run(function($rootScope, $state){
	$rootScope.$state = $state;
});