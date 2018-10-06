'use strict';

angular.module('gmm')
.controller('DynAgentCtrl', function ($scope, $log, $http, $routeParams, $sce) {
	$scope.moduleName = 'dynagent';

	$scope.correlationId = ((typeof $routeParams.correlationId == 'undefined') ? '' : $routeParams.correlationId);
	$log.debug("CorrelationID: " + $scope.correlationId);

	if($scope.correlationId && $scope.correlationId != '') {
		$scope.inputSessionId = $scope.correlationId;
		var iFramePath = location.protocol + "//" + location.host + "/#/start/" + $scope.inputSessionId;
        // iDemoSrv or POD link
        // $scope.iframeSrc = $sce.trustAsResourceUrl("http://demosrv:8073/#/start/" + $scope.inputSessionId);        
        // GDemo link
		// $scope.iframeSrc = $sce.trustAsResourceUrl("http://gdemo.genesyslab.com:8073/#/start/" + $scope.inputSessionId);        
        $scope.iframeSrc = $sce.trustAsResourceUrl(iFramePath);        
	}

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

	$scope.sendOrsEvent = function(data) {

		var sessionId = $scope.inputSessionId;

		var url = "/api/v1/orsevent/" + sessionId;
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