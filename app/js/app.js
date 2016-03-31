'use strict';
/**
* calcApp Module
*
* Description
*/
angular.module('calcApp', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'components/pages/login.html',
		controller: 'LoginController'
	})
	.when('/calc', {
		resolve: {
			"check": function($location, $rootScope) {
				if (!$rootScope.loggedIn) {
					$location.path('/')
				}
			}
		},
		templateUrl: 'components/pages/calc.html',
		controller: 'CalcController'
	})
	.otherwise({
		redirectTo: '/',
		controller: 'LoginController'
	});
}])
