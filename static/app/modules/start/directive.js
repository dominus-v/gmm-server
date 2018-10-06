'use strict';

angular.module('gmm')
.directive('start', [function () {
	return {
		templateUrl: 'modules/start/view.html',
		restrict: 'E'
	};
}]);
