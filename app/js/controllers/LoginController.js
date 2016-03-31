'use strict';

angular.module('calcApp')
.controller('LoginController', ['$scope', '$location', '$rootScope', '$http', function($scope, $location, $rootScope, $http){

	$scope.submit = function() {

		if ($scope.username == 'login' && $scope.userpassword == 'pass') {
			$rootScope.loggedIn = true;
			$location.path('/calc');

		} else {
			$scope.login_error = "Неверный логин или пароль";
			$scope.username = undefined;
			$scope.userpassword = undefined;
		};
	};

}])