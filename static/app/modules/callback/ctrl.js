'use strict';

angular.module('gmm')
.controller('CallbackCtrl', function ($scope, $log, $http, WorkspaceService) {
	
	$scope.moduleName = 'callback';
	
	$scope.pageData = WorkspaceService.getPageData();
	// $scope.callbackForm = {phone:'',name:'',cbdate:'',cbtime:''};

	var updatePageData = function(){
		$scope.pageData = WorkspaceService.getPageData();
	};

	WorkspaceService.registerPageObserverCallback(updatePageData);
	
    $log.debug($scope.moduleName,$scope.pageData);

	$scope.btnClick = function(idx) {
		var action = $scope.pageData.pageButtons[idx].action;
		$scope.callbackForm.action = action;
		console.log("Page button selected");
		WorkspaceService.sendEvent("select", $scope.callbackForm);
	}
	
});