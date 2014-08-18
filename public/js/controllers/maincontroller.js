// create the controller and inject Angular's $scope
var scotchApp = angular.module('scotchApp');

scotchApp.controller('mainController', function($scope, $http, Todos) {
	// create a message to display in our view
	$http.get('/Home')
	.success(function(data) {
		$scope.message = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
	//$scope.message = Todos.get;
	//console.log(Todos.get);

});