'use strict';

angular.module('gmm')
.controller('CommentCtrl', function ($scope, $log, $http, WorkspaceService, $sce) {
	
	$scope.moduleName = 'comment';
	$scope.commentForm = {text:''};
	
	$scope.pageData = WorkspaceService.getPageData();

	var updatePageData = function(){
		$scope.pageData = WorkspaceService.getPageData();
	};

	WorkspaceService.registerPageObserverCallback(updatePageData);
	
    $log.debug($scope.pageData);

	$scope.btnClick = function(idx) {
		var action = $scope.pageData.pageButtons[idx].action;
		$scope.commentForm.action = action;
		console.log("Page button selected");
		WorkspaceService.sendEvent("select", $scope.commentForm);
	}
	
});