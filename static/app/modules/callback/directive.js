'use strict';

angular.module('gmm')
.directive('callback', [function () {
	return {
		templateUrl: 'modules/callback/view.html',
		restrict: 'E'
	};
}]);
