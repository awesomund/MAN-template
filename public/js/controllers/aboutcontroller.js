var scotchApp = angular.module('scotchApp');

scotchApp.controller('aboutController', function($scope, $http) {
	$http.get('/About')
	.success(function(data) {
		$scope.message = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
});