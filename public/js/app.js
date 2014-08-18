// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'todoService', 'facebook']);

// configure our routes
scotchApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'views/about.html',
			controller  : 'aboutController'
		})

		.when('/login', {
			templateUrl : 'views/login.html',
			controller  : 'FacebookController'
		});

});

