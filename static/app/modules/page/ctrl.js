'use strict';

angular.module('gmm')
.controller('PageCtrl', function ($scope, $log, $http, WorkspaceService, $sce) {
	
	$scope.moduleName = 'page';
	
	$scope.pageData = WorkspaceService.getPageData();
	$scope.videoSrc = $sce.trustAsResourceUrl($scope.pageData.videoSrc);
	
	var updatePageData = function(){
		$scope.pageData = WorkspaceService.getPageData();
		$scope.videoSrc = $sce.trustAsResourceUrl($scope.pageData.videoSrc);
	};

	WorkspaceService.registerPageObserverCallback(updatePageData);
	
    $log.debug($scope.moduleName,$scope.pageData);

	$scope.btnClick = function(idx) {
		var action = $scope.pageData.pageButtons[idx].action;
		console.log("Page button selected");
		WorkspaceService.sendEvent("select", {action: action});
	}

});