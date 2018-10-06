'use strict';

angular.module('gmm')
.controller('MainCtrl', function ($rootScope, $scope, $log, $http, $routeParams, $location) {

  //$scope.moduleName = 'main';

  $scope.environment = $routeParams.environment;
  $scope.module = ((typeof $routeParams.module == 'undefined') ? 'default' : $routeParams.module);
  $scope.subModule = ((typeof $routeParams.subModule == 'undefined') ? 'default' : $routeParams.subModule);
  $scope.correlationId = ((typeof $routeParams.correlationId == 'undefined') ? '' : $routeParams.correlationId);

  $log.debug("Module/Sub/CorrelationID: " + $scope.module + ":" + $scope.subModule + ":" + $scope.correlationId);

  $scope.changeView = function(view){
    $scope.controllerRoute = view.url;
  };

});