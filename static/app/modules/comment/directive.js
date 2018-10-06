'use strict';

angular.module('gmm')
.directive('comment', [function () {
	return {
		templateUrl: 'modules/comment/view.html',
		restrict: 'E'
	};
}]);
