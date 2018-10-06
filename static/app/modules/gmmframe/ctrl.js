'use strict';

angular.module('gmm')
.controller('GMMFrameCtrl', function ($scope, $log, $http, WorkspaceService, $sce) {
	
	$scope.moduleName = 'gmmframe';
	
	$scope.pageData = WorkspaceService.getPageData();
	$scope.frameSrc = $sce.trustAsResourceUrl($scope.pageData.frameSrc);
	
	var updatePageData = function(){
		$scope.pageData = WorkspaceService.getPageData();
		$scope.frameSrc = $sce.trustAsResourceUrl($scope.pageData.frameSrc);
	};

	WorkspaceService.registerPageObserverCallback(updatePageData);
	
    $log.debug($scope.moduleName,$scope.pageData);

	$scope.btnClick = function(idx) {
		var action = $scope.pageData.pageButtons[idx].action;
		console.log("GMMFrame button selected");
		WorkspaceService.sendEvent("select", {action: action});
	}

});