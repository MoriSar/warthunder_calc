'use strict';

angular.module('calcApp')

.controller('CalcController', ['$scope', '$http', '$location', function($scope, $http, $location){
	$http.get('components/json/mainData.json')
	.success(function(response) {

		//--->first_initialization<---
		$scope.data = {};
		//--->end _first_initialization<---

		//--->data_json_initialization<---
		$scope.boosters = response.boosters;
		$scope.brs = response.brs;
		$scope.vehicles = response.vehicles;
		$scope.modes = response.modes;
		//--->end_data_json_initialization<---

		//--->set_selectors_to_default_values<---
		$scope.data.cost = $scope.vehicles[0].cost;
		$scope.data.br = $scope.brs[0].value;
		$scope.data.booster = $scope.boosters[0].value;
		//--->end_set_selectors_to_default_values<---

		//--->buttons<---
		//--->calc_button<---
		$scope.letsCalc = function(date, calcForm) {

			if ($scope.calcForm.destroyed.$valid && $scope.calcForm.timeInBattle.$valid && $scope.calcForm.expNeed.$valid) {

				$scope.results = {};

				$scope.results.destroyNeed = Math.ceil((parseInt($scope.data.expNeed) / (parseInt($scope.data.cost) * parseInt($scope.data.br))) / parseInt($scope.data.booster));

				$scope.results.battlesNeed = Math.ceil(($scope.results.destroyNeed / parseInt($scope.data.destroyed)) / parseInt($scope.data.booster));

				$scope.results.timesNeed = Math.ceil(($scope.results.battlesNeed * parseInt($scope.data.timeInBattle)) / parseInt($scope.data.booster));
			};
		};
		//--->end_celc_button<---

		//--->logout>button<---
		$scope.logout = function() {
			if (confirm("Вы точно хотите выйти?")) {
				$location.path('/');
			};
		};
		//--->end_logout_button<---
		//--->end_buttons<---
	});
	//--->end_successe<---
}]);