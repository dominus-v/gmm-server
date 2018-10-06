'use strict';

angular.module('gmm')
.directive('welcome', [function () {
	return {
		templateUrl: 'modules/welcome/view.html',
		restrict: 'E'
	};
}]);
