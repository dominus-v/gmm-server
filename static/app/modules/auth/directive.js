'use strict';

angular.module('gmm')
.directive('auth', [function () {
	return {
		templateUrl: 'modules/auth/view.html',
		restrict: 'E'
	};
}]);
