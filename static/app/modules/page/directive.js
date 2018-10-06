'use strict';

angular.module('gmm')
.directive('page', [function () {
	return {
		templateUrl: 'modules/page/view.html',
		restrict: 'E'
	};
}]);
