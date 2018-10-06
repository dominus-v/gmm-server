'use strict';

angular.module('gmm')
.controller('AgentCtrl', function ($scope, $log, $http, $routeParams, $sce) {
	$scope.moduleName = 'agent';

	$scope.correlationId = ((typeof $routeParams.correlationId == 'undefined') ? '' : $routeParams.correlationId);
	$log.debug("CorrelationID: " + $scope.correlationId);

	if($scope.correlationId && $scope.correlationId != '') {
		$scope.inputSessionId = $scope.correlationId;
        var demoHost = "demosrv";
        var mmivrPort = "8073";
		var iFramePath = "http://" + demoHost + ":" + mmivrPort + "/#/start/" + $scope.inputSessionId;
		// var iFramePath = location.protocol + "//" + location.host + "/#/start/" + $scope.inputSessionId;
        // iDemosrv link
        // $scope.iframeSrc = $sce.trustAsResourceUrl("http://demosrv.genesyslab.com:8073/#/start/" + $scope.inputSessionId);        
        // POD link
        // $scope.iframeSrc = $sce.trustAsResourceUrl("http://podname.live.genesys.com:8073/#/start/" + $scope.inputSessionId);        
        // GDemo link
		// $scope.iframeSrc = $sce.trustAsResourceUrl("http://core2.demo.genesys.com:8073/#/start/" + $scope.inputSessionId);        
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