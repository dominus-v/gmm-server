'use strict';

angular.module('gmm')
.directive('menu', [function () {
	return {
		templateUrl: 'modules/menu/view.html',
		restrict: 'E'
	};
}]);
