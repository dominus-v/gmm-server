'use strict';

angular.module('gmm')
.controller('WelcomeCtrl', function ($scope, $log, $http, $location, WorkspaceService) {
	$scope.moduleName = 'welcome';

	$scope.startSession = function() {
		WorkspaceService.setSessionId($scope.inputSessionId);
		$location.path("/start/" + $scope.inputSessionId);
	}
	
});