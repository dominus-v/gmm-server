'use strict';

angular.module('gmm')
.directive('test', [function () {
	return {
		templateUrl: 'modules/test/view.html',
		restrict: 'E'
	};
}]);
