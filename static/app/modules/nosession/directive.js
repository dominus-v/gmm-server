'use strict';

angular.module('gmm')
.directive('nosession', [function () {
	return {
		templateUrl: 'modules/nosession/view.html',
		restrict: 'E'
	};
}]);
