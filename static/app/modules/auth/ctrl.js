'use strict';

angular.module('gmm')
.controller('AuthCtrl', function ($scope, $log, $http, WorkspaceService, $sce) {
	
	$scope.moduleName = 'auth';
	$scope.loginForm = {username:'',password:''};
	
	$scope.pageData = WorkspaceService.getPageData();

	var updatePageData = function(){
		$scope.pageData = WorkspaceService.getPageData();
	};

	WorkspaceService.registerPageObserverCallback(updatePageData);
	
    $log.debug($scope.pageData);

	$scope.btnClick = function(idx) {
		var action = $scope.pageData.pageButtons[idx].action;
		$scope.loginForm.action = action;
		console.log("Page button selected");
		WorkspaceService.sendEvent("select", $scope.loginForm);
	}
	
});