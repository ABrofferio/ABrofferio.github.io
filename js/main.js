/*Main AngularJS Web Application*/

var app = angular.module('app', ['ngRoute']);

/*Configure the Routes*/
app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			controller: "homeController"
		})
		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'aboutController'
		})
		.when('/skills', {
			templateUrl: 'partials/skills.html',
			controller: 'skillsController'
		})
		.when('/portfolio', {
			templateUrl: 'partials/portfolio.html',
			controller: "portfolioController"
		})
		.when('/fun', {
			templateUrl: 'partials/fun.html',
			controller: "funController"
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'contactController'
		});
});
app.controller('homeController', function($scope) {
	$scope.name = "home";
});
app.controller('aboutController', function($scope) {
	$scope.name = "about";
});
app.controller('skillsController', function($scope) {
	$scope.name = "skills";
});
app.controller('portfolioController', function($scope) {
	$scope.name = "portfolio";
});
app.controller('funController', function($scope) {
	$scope.name = "fun";
});
app.controller('contactController', function($scope) {
	$scope.name = "contact";
});

var crud = angular.module('crud', ['ngResource']);
