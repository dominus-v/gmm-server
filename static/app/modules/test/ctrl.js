'use strict';

angular.module('gmm')
.controller('TestCtrl', function ($scope, $log, $http) {
	$scope.moduleName = 'test';

	$scope.sendEvent = function(data) {
		
		var sessionId = $scope.inputSessionId;

		var url = "/api/v1/event/" + sessionId;
		console.log("URL: " + url);

		$http.post(url, data).
		success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	};
	
});