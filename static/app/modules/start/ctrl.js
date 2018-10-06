'use strict';

angular.module('gmm')
.controller('StartCtrl', function ($scope, $log, $http, $location, WorkspaceService) {
	$scope.moduleName = 'start';

	// $scope.$watch('correlationId', function(newValue, oldValue){
	//     $log.debug("Session Correlation ID: " + newValue);
	//     if(newValue != undefined && newValue != '') {
	//       WorkspaceService.setSessionId(newValue);
	//     }
 //  	});

    if($scope.correlationId != undefined && $scope.correlationId != '') {
    	WorkspaceService.setSessionId($scope.correlationId);
	} else {
		$location.path("/welcome");
	}

});