'use strict';

angular.module('gmm')
.directive('dynagent', [function () {
	return {
		templateUrl: 'modules/dynagent/view.html',
		restrict: 'E'
	};
}]);
