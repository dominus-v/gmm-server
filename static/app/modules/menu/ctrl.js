'use strict';

angular.module('gmm')
.controller('MenuCtrl', function ($scope, $log, $http, WorkspaceService) {
	
	$scope.moduleName = 'menu';
	
	$scope.pageData = WorkspaceService.getPageData();

	var updatePageData = function(){
		$scope.pageData = WorkspaceService.getPageData();
	};

	WorkspaceService.registerPageObserverCallback(updatePageData);

	$scope.menuItemSelected = function(idx) {
		var action = $scope.pageData.menuItems[idx].action;
		var name = $scope.pageData.menuItems[idx].name;
		$log.debug("Menu item selected: " + name + " >> " + action );
		WorkspaceService.sendEvent("select", {action: action});
	}

	$scope.btnClick = function(idx) {
		var action = $scope.pageData.pageButtons[idx].action;
		console.log("Page button selected");
		WorkspaceService.sendEvent("select", {action: action});
	}
});