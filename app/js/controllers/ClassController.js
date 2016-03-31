'use strict';

angular.module('calcApp')
.controller('ClassController', ['$scope','$http', function($scope, $http){
	$http.get('components/json/mainData.json')
	.success(function(response) {

	//--->class_vehicle<---
	$scope.class = {};
	$scope.class.vehicle = function() {
		if ($scope.data.cost == $scope.vehicles[0].cost) {
			return "vehicle_tank_init"
		} else if ($scope.data.cost == $scope.vehicles[1].cost) {
			return "vehicle_plane_init"
		}
	}
	//--->end_class_vehicle<---

	//--->class_br<---
	$scope.class.br = function() {
		if ($scope.data.cost == $scope.vehicles[0].cost) {
			return "vehicle_tank_br"
		} else if ($scope.data.cost == $scope.vehicles[1].cost) {
			return ""
		};
		
	}
	//--->end_class_br<---

	//--->class_frag<---
	$scope.class.frag = function() {
		if ($scope.data.cost == $scope.vehicles[0].cost) {
			return "vehicle_tank_frag_" + $scope.data.destroyed;
		} else if ($scope.data.cost == $scope.vehicles[1].cost) {
			return "vehicle_plane_frag_" + $scope.data.destroyed;
		}
		
	}
	//--->end_class_frag<---

	//--->class-clock<---
	$scope.class.clock = function() {
		return "rotate(" + (6 * $scope.data.timeInBattle) + "deg)"
	}
	//--->end_class-clock<---

})
}]);

