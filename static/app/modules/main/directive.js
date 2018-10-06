'use strict';

angular.module('gmm')
.directive('mainView', [function () {
	return {
		templateUrl: 'modules/main/view.html',
		restrict: 'E'
	};
}]);
