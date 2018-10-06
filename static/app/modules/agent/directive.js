'use strict';

angular.module('gmm')
.directive('agent', [function () {
	return {
		templateUrl: 'modules/agent/view.html',
		restrict: 'E'
	};
}]);
